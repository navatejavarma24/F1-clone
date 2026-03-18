$drivers = @(
    "Michael Schumacher",
    "Lewis Hamilton",
    "Ayrton Senna",
    "Juan Manuel Fangio",
    "Sebastian Vettel",
    "Alain Prost",
    "Max Verstappen",
    "Fernando Alonso",
    "Jim Clark",
    "Jackie Stewart"
)

foreach ($driver in $drivers) {
    $url = "https://en.wikipedia.org/w/api.php?action=query&titles=$($driver -replace ' ','%20')&prop=pageimages&format=json&pithumbsize=500"
    try {
        $response = Invoke-RestMethod -Uri $url
        $pages = $response.query.pages
        $pageId = ($pages | Get-Member -MemberType NoteProperty).Name[0]
        $imgUrl = $pages.$pageId.thumbnail.source
        Write-Host "$driver | $imgUrl"
    } catch {
        Write-Host "$driver | Error"
    }
}
