@echo off
setlocal
title CampusIQ 2.0 - Universal Deployment Hub
cls
echo ===================================================================
echo             CampusIQ 2.0 - Universal Deployment System
echo ===================================================================
echo.
echo [1] Start Instant Live Public URL (Cloudflare Tunnel - Free, No Sign-up)
echo [2] Start Local Production Server (http://127.0.0.1:8000)
echo [3] Run Automated Verification Tests (Pytest Suite)
echo [4] Build and Run Docker Container (docker-compose up)
echo [5] Exit
echo.
set /p opt="Select an option [1-5]: "

if "%opt%"=="1" goto tunnel
if "%opt%"=="2" goto server
if "%opt%"=="3" goto tests
if "%opt%"=="4" goto docker
if "%opt%"=="5" goto end
goto invalid

:tunnel
echo.
echo Starting CampusIQ server in background...
start "CampusIQ Server" /B python -m uvicorn main:app --host 127.0.0.1 --port 8000
timeout /t 2 /nobreak >nul
echo Launching public HTTPS tunnel...
if exist .\cloudflared.exe (
    .\cloudflared.exe tunnel --url http://127.0.0.1:8000
) else (
    echo Error: cloudflared.exe not found in current directory.
)
goto end

:server
echo.
echo Starting CampusIQ Production Server on http://0.0.0.0:8000...
python -m uvicorn main:app --host 0.0.0.0 --port 8000
goto end

:tests
echo.
echo Running 21-point automated verification suite...
python -m pytest tests/ -v
pause
goto end

:docker
echo.
echo Building and launching Docker container...
docker-compose up --build
goto end

:invalid
echo Invalid choice. Please run deploy.bat again.
pause

:end
