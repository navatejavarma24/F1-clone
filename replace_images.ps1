$map = @{
    "https://media.formula1.com/content/dam/fom-website/drivers/M/MICSCH01_Michael_Schumacher/micsch01.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Michael_Schumacher_china_2012_rotated.png/500px-Michael_Schumacher_china_2012_rotated.png"
    "https://media.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Prime_Minister_Keir_Starmer_meets_Sir_Lewis_Hamilton_%2854566928382%29_%28cropped%29.jpg/500px-Prime_Minister_Keir_Starmer_meets_Sir_Lewis_Hamilton_%2854566928382%29_%28cropped%29.jpg"
    "https://media.formula1.com/content/dam/fom-website/drivers/A/AYRSEN01_Ayrton_Senna/ayrsen01.png" = "https://upload.wikimedia.org/wikipedia/commons/6/65/Ayrton_Senna_9_%28cropped%29.jpg"
    "https://media.formula1.com/content/dam/fom-website/drivers/J/JUAFAN01_Juan_Manuel_Fangio/juafan01.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Fangio_in_1955_%28cropped%29.jpg/500px-Fangio_in_1955_%28cropped%29.jpg"
    "https://media.formula1.com/content/dam/fom-website/drivers/S/SEBVET01_Sebastian_Vettel/sebvet01.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sebastian_Vettel_-_2022236172324_2022-08-24_Champions_for_Charity_-_Sven_-_1D_X_MK_II_-_0418_-_B70I2428_%28cropped%29.jpg/500px-Sebastian_Vettel_-_2022236172324_2022-08-24_Champions_for_Charity_-_Sven_-_1D_X_MK_II_-_0418_-_B70I2428_%28cropped%29.jpg"
    "https://media.formula1.com/content/dam/fom-website/drivers/A/ALAPRO01_Alain_Prost/alapro01.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Festival_automobile_international_2015_-_Photocall_-_065_%28cropped3%29.jpg/500px-Festival_automobile_international_2015_-_Photocall_-_065_%28cropped3%29.jpg"
    "https://media.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg"
    "https://media.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fernando_Alonso_racing_at_the_2024_F1_in_Schools_World_Finals_%28cropped%29.jpg/500px-Fernando_Alonso_racing_at_the_2024_F1_in_Schools_World_Finals_%28cropped%29.jpg"
    "https://media.formula1.com/content/dam/fom-website/drivers/J/JIMCLA01_Jim_Clark/jimcla01.png" = "https://upload.wikimedia.org/wikipedia/commons/4/4c/Jim_Clark_1964.jpg"
    "https://media.formula1.com/content/dam/fom-website/drivers/J/JACSTE01_Jackie_Stewart/jacste01.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jackie_Stewart_at_the_2014_WEC_Silverstone_round.jpg/500px-Jackie_Stewart_at_the_2014_WEC_Silverstone_round.jpg"
}

$files = @("c:\Users\navateja varma\Downloads\ag\projects\drivers.html", "c:\Users\navateja varma\Downloads\ag\projects\driver-details.js")

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content -Raw $file
        foreach ($key in $map.Keys) {
            $content = $content.Replace($key, $map[$key])
        }
        Set-Content -Path $file -Value $content -NoNewline -Encoding UTF8
        Write-Host "Updated images in $file"
    }
}
