$path = "c:\Users\navateja varma\Downloads\ag\projects\index.html"
$content = Get-Content -Raw $path
$content = $content -replace '(?m)^(\s*)<a href="#" id="schedule-link">Schedule</a>', "`$1<a href=`"/`" id=`"home-link`">Home</a>`n`$1<a href=`"#`" id=`"schedule-link`">Schedule</a>"
$content = $content -replace '(?m)^(\s*)<a href="drivers\.html" class="has-dropdown" id="f1-nav-link">Formula 1 <span class="arrow-down"></span></a>', "`$1<a href=`"drivers.html`" id=`"all-time-10-link`">All Time 10</a>`n`$1<a href=`"standings.html`" id=`"standings-link`">Current Standings</a>`n`$1<a href=`"live.html`" id=`"live-link`">Live</a>`n`$1<a href=`"drivers.html`" class=`"has-dropdown`" id=`"f1-nav-link`">Formula 1 <span class=`"arrow-down`"></span></a>"
Set-Content -Path $path -Value $content -NoNewline
Write-Host "Replaced successfully using regex"
