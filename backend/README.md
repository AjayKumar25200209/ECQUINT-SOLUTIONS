docker build -t ecquint-backend .


docker run -d \
  -p 8000:8000 \
  --env-file .env \
  -v $(pwd)/public/uploads:/app/public/uploads \
  ecquint-backend