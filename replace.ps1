$path = "c:\Users\navateja varma\Downloads\ag\projects\index.html"
$content = Get-Content -Raw $path
$target = "            <div class=`"nav-links`">`r`n                <a href=`"#`" id=`"schedule-link`">Schedule</a>`r`n                <a href=`"drivers.html`" class=`"has-dropdown`" id=`"f1-nav-link`">Formula 1 <span class=`"arrow-down`"></span></a>`r`n            </div>"
$target2 = "            <div class=`"nav-links`">`n                <a href=`"#`" id=`"schedule-link`">Schedule</a>`n                <a href=`"drivers.html`" class=`"has-dropdown`" id=`"f1-nav-link`">Formula 1 <span class=`"arrow-down`"></span></a>`n            </div>"

$replacement = "            <div class=`"nav-links`">`r`n                <a href=`"/`" id=`"home-link`">Home</a>`r`n                <a href=`"#`" id=`"schedule-link`">Schedule</a>`r`n                <a href=`"drivers.html`" id=`"all-time-10-link`">All Time 10</a>`r`n                <a href=`"standings.html`" id=`"standings-link`">Current Standings</a>`r`n                <a href=`"live.html`" id=`"live-link`">Live</a>`r`n                <a href=`"drivers.html`" class=`"has-dropdown`" id=`"f1-nav-link`">Formula 1 <span class=`"arrow-down`"></span></a>`r`n            </div>"

if ($content.Contains($target)) {
    $content = $content.Replace($target, $replacement)
    Set-Content -Path $path -Value $content -NoNewline
    Write-Host "Replaced CRLF target"
} elseif ($content.Contains($target2)) {
    $content = $content.Replace($target2, $replacement.Replace("`r`n", "`n"))
    Set-Content -Path $path -Value $content -NoNewline
    Write-Host "Replaced LF target"
} else {
    Write-Host "Target not found"
}
