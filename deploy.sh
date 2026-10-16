#!/usr/bin/env bash
set -e

echo "==================================================================="
echo "            CampusIQ 2.0 - Universal Deployment Hub"
echo "==================================================================="
echo ""
echo "Select deployment action:"
echo "1) Start Production Uvicorn Server (Port 8000)"
echo "2) Run Pytest Verification Suite"
echo "3) Build and Run Docker Container"
echo "4) Launch Cloudflare Tunnel (Requires cloudflared in PATH)"
echo ""
read -p "Select [1-4]: " opt

case $opt in
  1)
    echo "Starting Uvicorn production server..."
    python3 -m uvicorn main:app --host 0.0.0.0 --port "${PORT:-8000}"
    ;;
  2)
    echo "Running pytest verification suite..."
    python3 -m pytest tests/ -v
    ;;
  3)
    echo "Building and launching container..."
    docker-compose up --build
    ;;
  4)
    echo "Starting uvicorn in background..."
    python3 -m uvicorn main:app --host 127.0.0.1 --port 8000 &
    sleep 2
    cloudflared tunnel --url http://127.0.0.1:8000
    ;;
  *)
    echo "Invalid option."
    exit 1
    ;;
esac
