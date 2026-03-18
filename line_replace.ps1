$path = "c:\Users\navateja varma\Downloads\ag\projects\index.html"
$lines = Get-Content $path
$newlines = @()
foreach ($line in $lines) {
    if ($line -match 'id="schedule&#45;link"') {
        $newlines += '                <a href="/" id="home-link">Home</a>'
        $newlines += $line
    }
    elseif ($line -match 'id="f1&#45;nav&#45;link"') {
        $newlines += '                <a href="drivers.html" id="all-time-10-link">All Time 10</a>'
        $newlines += '                <a href="standings.html" id="standings-link">Current Standings</a>'
        $newlines += '                <a href="live.html" id="live-link">Live</a>'
        $newlines += $line
    }
    else {
        $newlines += $line
    }
}
$newlines | Set-Content $path -Encoding UTF8
Write-Host "Updated links successfully!"
