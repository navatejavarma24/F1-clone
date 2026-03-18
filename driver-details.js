const driverData = {
    "schumacher": {
        name: "Michael Schumacher",
        team: "Ferrari Legend",
        number: "1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Michael_Schumacher_china_2012_rotated.png/500px-Michael_Schumacher_china_2012_rotated.png",
        stats: { wdc: 7, wins: 91, podiums: 155, poles: 68 },
        bio: "Michael Schumacher is considered by many as the greatest driver in F1 history. He won seven World Championships, five of which were consecutive with Ferrari from 2000 to 2004, dominating an entire era of the sport."
    },
    "hamilton": {
        name: "Lewis Hamilton",
        team: "Mercedes Legend",
        number: "44",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Prime_Minister_Keir_Starmer_meets_Sir_Lewis_Hamilton_%2854566928382%29_%28cropped%29.jpg/500px-Prime_Minister_Keir_Starmer_meets_Sir_Lewis_Hamilton_%2854566928382%29_%28cropped%29.jpg",
        stats: { wdc: 7, wins: 103, podiums: 203, poles: 104 },
        bio: "Sir Lewis Hamilton statistically holds the record for the most wins, podiums, and pole positions in Formula One history. Tied with Schumacher for seven World Championships, his impact on and off the track has been immense."
    },
    "senna": {
        name: "Ayrton Senna",
        team: "McLaren Legend",
        number: "3",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Ayrton_Senna_9_%28cropped%29.jpg",
        stats: { wdc: 3, wins: 41, podiums: 80, poles: 65 },
        bio: "Ayrton Senna was a Brazilian racing driver whose supreme talent and sheer speed made him a global icon. Often considered the fastest driver over a single lap, he won three World Championships before his tragic death in 1994."
    },
    "fangio": {
        name: "Juan Manuel Fangio",
        team: "Historic Legend",
        number: "4",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Fangio_in_1955_%28cropped%29.jpg/500px-Fangio_in_1955_%28cropped%29.jpg",
        stats: { wdc: 5, wins: 24, podiums: 35, poles: 29 },
        bio: "Juan Manuel Fangio dominated the first decade of Formula One racing, winning five World Championships with four different teams. His win percentage of 46.15% remains unmatched in the sport's history."
    },
    "vettel": {
        name: "Sebastian Vettel",
        team: "Red Bull Legend",
        number: "5",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sebastian_Vettel_-_2022236172324_2022-08-24_Champions_for_Charity_-_Sven_-_1D_X_MK_II_-_0418_-_B70I2428_%28cropped%29.jpg/500px-Sebastian_Vettel_-_2022236172324_2022-08-24_Champions_for_Charity_-_Sven_-_1D_X_MK_II_-_0418_-_B70I2428_%28cropped%29.jpg",
        stats: { wdc: 4, wins: 53, podiums: 122, poles: 57 },
        bio: "Sebastian Vettel achieved four consecutive World Championships with Red Bull Racing from 2010 to 2013. He remains the youngest World Champion in the history of Formula One."
    },
    "prost": {
        name: "Alain Prost",
        team: "McLaren Legend",
        number: "6",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Festival_automobile_international_2015_-_Photocall_-_065_%28cropped3%29.jpg/500px-Festival_automobile_international_2015_-_Photocall_-_065_%28cropped3%29.jpg",
        stats: { wdc: 4, wins: 51, podiums: 106, poles: 33 },
        bio: "Nicknamed 'The Professor' for his intellectual approach to racing, Alain Prost won four World Championships. His intense rivalry with Ayrton Senna defined an entire generation of F1 racing."
    },
    "verstappen": {
        name: "Max Verstappen",
        team: "Red Bull Racing",
        number: "1",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg",
        stats: { wdc: 4, wins: 71, podiums: 127, poles: 48 },
        bio: "Max Verstappen burst onto the scene as the youngest driver ever to start an F1 race. His aggressive driving style and exceptional car control have brought him immense success and multiple World Championships."
    },
    "alonso": {
        name: "Fernando Alonso",
        team: "Aston Martin",
        number: "14",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fernando_Alonso_racing_at_the_2024_F1_in_Schools_World_Finals_%28cropped%29.jpg/500px-Fernando_Alonso_racing_at_the_2024_F1_in_Schools_World_Finals_%28cropped%29.jpg",
        stats: { wdc: 2, wins: 32, podiums: 106, poles: 22 },
        bio: "Fernando Alonso won two consecutive World Championships with Renault, famously ending Michael Schumacher's period of dominance. Renowned for his race craft, he has had one of the longest careers in F1."
    },
    "clark": {
        name: "Jim Clark",
        team: "Lotus Legend",
        number: "9",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Jim_Clark_1964.jpg",
        stats: { wdc: 2, wins: 25, podiums: 32, poles: 33 },
        bio: "A quiet Scottish driver, Jim Clark won two World Championships driving for Lotus. At the time of his fatal crash in 1968, he had won more races and achieved more pole positions than any other driver."
    },
    "stewart": {
        name: "Jackie Stewart",
        team: "Tyrrell Legend",
        number: "10",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Jackie_Stewart_at_the_2014_WEC_Silverstone_round.jpg/500px-Jackie_Stewart_at_the_2014_WEC_Silverstone_round.jpg",
        stats: { wdc: 3, wins: 27, podiums: 43, poles: 17 },
        bio: "Sir Jackie Stewart, 'The Flying Scot', won three World Championships. Beyond his immense success on the track, he is remembered for his pioneering efforts to improve safety standards in Formula One."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const driverId = params.get('id');

    if (driverId && driverData[driverId]) {
        const driver = driverData[driverId];
        
        document.getElementById('driver-name').textContent = driver.name;
        document.getElementById('driver-team').textContent = driver.team;
        document.getElementById('driver-number').textContent = driver.number;
        document.getElementById('driver-image').src = driver.image;
        document.getElementById('driver-image').alt = driver.name;
        
        document.getElementById('stat-wdc').textContent = driver.stats.wdc;
        document.getElementById('stat-wins').textContent = driver.stats.wins;
        document.getElementById('stat-podiums').textContent = driver.stats.podiums;
        document.getElementById('stat-poles').textContent = driver.stats.poles;
        
        document.getElementById('driver-bio').textContent = driver.bio;
        document.title = `${driver.name} | FanCode F1`;
    } else {
        document.getElementById('driver-name').textContent = "Driver Not Found";
        document.getElementById('driver-team').textContent = "Unknown Team";
        document.getElementById('driver-bio').textContent = "We couldn't find details for the requested driver.";
    }
});
