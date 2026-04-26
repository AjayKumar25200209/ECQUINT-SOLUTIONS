import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME"),
    )

def init_db():
    conn = get_connection()
    cursor = conn.cursor()

    # ============================
    # CAREER TABLE (FIXED)
    # ============================
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS careers (
            id INT AUTO_INCREMENT PRIMARY KEY,

            name VARCHAR(150) NOT NULL,
            email VARCHAR(150) NOT NULL,
            phone VARCHAR(30),

            role VARCHAR(150),
            experience VARCHAR(50),

            message TEXT,
            skills TEXT,

            resume_file_name VARCHAR(255),
            resume_path TEXT,
            resume_url TEXT,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            INDEX idx_email (email)
        )
    """)

    # ============================
    # HIRE TABLE (FIXED)
    # ============================
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS hires (
            id INT AUTO_INCREMENT PRIMARY KEY,

            name VARCHAR(150) NOT NULL,
            email VARCHAR(150) NOT NULL,
            company VARCHAR(150),

            phone VARCHAR(30),
            role VARCHAR(150),

            team_size VARCHAR(50),
            timeline VARCHAR(50),
            budget VARCHAR(50),

            message TEXT,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            INDEX idx_email (email)
        )
    """)

    conn.commit()
    cursor.close()
    conn.close()