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
    # Jim Clark has a disambiguation page, so use "Jim Clark (racing driver)"
    $queryName = $driver
    if ($driver -eq "Jim Clark") { $queryName = "Jim Clark (racing driver)" }
    $url = "https://en.wikipedia.org/w/api.php?action=query&titles=$($queryName -replace ' ','%20')&prop=pageimages&format=json&pithumbsize=500"
    try {
        $response = Invoke-RestMethod -Uri $url
        $pages = $response.query.pages
        foreach ($p in $pages.PSObject.Properties) {
            $imgUrl = $p.Value.thumbnail.source
            if ($imgUrl) {
                Write-Host "$driver | $imgUrl"
            } else {
                Write-Host "$driver | NO THUMBNAIL"
            }
        }
    } catch {
        Write-Host "$driver | Error"
    }
}
