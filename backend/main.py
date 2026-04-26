from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv
from database import get_connection, init_db

# ============================
# INIT
# ============================

load_dotenv()

app = FastAPI()

UPLOAD_DIR = "public/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)
from fastapi.staticfiles import StaticFiles

app.mount("/uploads", StaticFiles(directory="public/uploads"), name="uploads")

# ============================
# STARTUP EVENT (DB INIT)
# ============================

@app.on_event("startup")
def on_startup():
    init_db()

# ============================
# CORS
# ============================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================
# MODELS
# ============================

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str | None = ""
    company: str | None = ""
    message: str

class HireRequest(BaseModel):
    name: str
    email: EmailStr
    company: str | None = ""
    phone: str | None = ""
    role: str | None = ""
    teamSize: str | None = ""
    timeline: str | None = ""
    budget: str | None = ""
    message: str | None = ""

# ============================
# EMAIL CONFIG
# ============================

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587

SMTP_EMAIL = os.getenv("SMTP_EMAIL")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
TO_EMAIL = os.getenv("TO_EMAIL")

# ============================
# EMAIL HELPERS
# ============================

def load_template(data):
    with open("templates/contact_email.html", "r", encoding="utf-8") as file:
        html = file.read()

    html = html.replace("{{name}}", data.name)
    html = html.replace("{{email}}", data.email)
    html = html.replace("{{phone}}", data.phone or "-")
    html = html.replace("{{company}}", data.company or "-")
    html = html.replace("{{message}}", data.message)

    return html

def send_email(data: ContactRequest):
    subject = f"New Contact Request from {data.name}"
    html_content = load_template(data)

    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = SMTP_EMAIL
    msg["To"] = TO_EMAIL

    msg.attach(MIMEText(html_content, "html"))

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_EMAIL, SMTP_PASSWORD)
        server.send_message(msg)

def send_email_raw(html, subject):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = SMTP_EMAIL
    msg["To"] = TO_EMAIL

    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_EMAIL, SMTP_PASSWORD)
        server.send_message(msg)

# ============================
# ROUTES
# ============================

@app.post("/contact")
def submit_contact(data: ContactRequest):
    send_email(data)
    return {"message": "Request submitted successfully"}



# ============================
# CAREER EMAIL TEMPLATE
# ============================

def load_career_template(data):
    with open("templates/career_email.html", "r", encoding="utf-8") as file:
        html = file.read()

    html = html.replace("{{name}}", data["name"])
    html = html.replace("{{email}}", data["email"])
    html = html.replace("{{phone}}", data.get("phone", "-"))
    html = html.replace("{{role}}", data.get("role", "-"))
    html = html.replace("{{experience}}", data.get("experience", "-"))
    html = html.replace("{{skills}}", data.get("skills", "-"))
    html = html.replace("{{message}}", data.get("message", "-"))
    html = html.replace("{{resume_url}}", data["resume_url"])

    return html


# ============================
# CAREER ROUTE (FIXED)
# ============================

import uuid

BASE_URL = os.getenv("BASE_URL", "http://localhost:8000")

@app.post("/career")
async def submit_career(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(""),
    role: str = Form(""),
    experience: str = Form(""),
    message: str = Form(""),
    skills: str = Form(""),
    resume: UploadFile = File(...)
):
    # ============================
    # FILE SAVE (SAFE)
    # ============================

    ext = resume.filename.split(".")[-1]
    file_name = f"{uuid.uuid4()}.{ext}"

    file_path = os.path.join(UPLOAD_DIR, file_name)

    with open(file_path, "wb") as f:
        f.write(await resume.read())

    # ============================
    # FILE URL (IMPORTANT)
    # ============================

    file_url = f"{BASE_URL}/uploads/{file_name}"

    # ============================
    # SAVE TO DATABASE (FIXED)
    # ============================

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO careers 
        (name, email, phone, role, experience, message, skills,
         resume_file_name, resume_path, resume_url)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
    """, (
        name, email, phone, role, experience, message, skills,
        file_name, file_path, file_url
    ))

    conn.commit()
    cursor.close()
    conn.close()

    # ============================
    # SEND EMAIL (FIXED)
    # ============================

    html = load_career_template({
        "name": name,
        "email": email,
        "phone": phone,
        "role": role,
        "experience": experience,
        "skills": skills,
        "message": message,
        "resume_url": file_url
    })

    send_email_raw(html, "Career Application")

    return {"message": "Application submitted"}



def load_hire_template(data):
    with open("templates/hire_email.html", "r", encoding="utf-8") as file:
        html = file.read()

    html = html.replace("{{name}}", data.name)
    html = html.replace("{{email}}", data.email)
    html = html.replace("{{company}}", data.company or "-")
    html = html.replace("{{phone}}", data.phone or "-")
    html = html.replace("{{role}}", data.role or "-")
    html = html.replace("{{teamSize}}", data.teamSize or "-")
    html = html.replace("{{timeline}}", data.timeline or "-")
    html = html.replace("{{budget}}", data.budget or "-")
    html = html.replace("{{message}}", data.message or "-")

    return html


@app.post("/hire")
def submit_hire(data: HireRequest):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO hires (name,email,company,phone,role,team_size,timeline,budget,message)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)
    """, (
        data.name,
        data.email,
        data.company,
        data.phone,
        data.role,
        data.teamSize,
        data.timeline,
        data.budget,
        data.message
    ))

    conn.commit()
    cursor.close()
    conn.close()

    html = load_hire_template(data)
    send_email_raw(html, "Hiring Request")


    return {"message": "Request submitted"}

# ============================
# RUN
# ============================

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )