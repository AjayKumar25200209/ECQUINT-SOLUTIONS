# Use slim Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Prevent Python from buffering logs
ENV PYTHONUNBUFFERED=1

# Install system dependencies (important for some packages)
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first (for caching)
COPY requirements.txt .

# Install Python deps
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Create upload directory (important)
RUN mkdir -p public/uploads

# Expose port
EXPOSE 8000

# Run app (production mode)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]