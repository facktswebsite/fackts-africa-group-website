
Write-Host ""
Write-Host "FACKTS AFRICA GROUP WEBSITE" -ForegroundColor Yellow
Write-Host "----------------------------"
node -v
if ($LASTEXITCODE -ne 0) {
  Write-Host "Node.js is not installed. Install Node.js 20.9 or newer." -ForegroundColor Red
  exit
}
if (!(Test-Path "node_modules")) {
  Write-Host "Installing packages..." -ForegroundColor Cyan
  npm install
}
npm run dev
