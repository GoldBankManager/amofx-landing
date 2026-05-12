@echo off
REM Deploy AmoFX Landing Page to GitHub Pages

cd C:\Users\Hacer\.openclaw\workspace\amofx-landing

echo Setting up remote...
git remote add origin https://github.com/Daytrader61/amofx-landing.git 2>nul

echo Pushing to GitHub...
git branch -M main
git push -u origin main --force

echo.
echo ==========================================
echo AmoFX Landing Page deployed!
echo URL: https://daytrader61.github.io/amofx-landing/
echo ==========================================
pause
