
async function handleFetch(id) {
    const res = await fetch(`https://swapi.dev/api/people/${id}`);
    const result = await res.json();
    const vehicles = await result.vehicles[0]
    const vehiclesName = await fetch(vehicles)
    const nameV = await vehiclesName.json();
    const finalV = await nameV.name
    const starships = await result.starships[0]
    const starshipsName = await fetch(starships)
    const nameS = await starshipsName.json();
    const finalS = await nameS.name

    alert(`
        Name: ${result.name}, 
        Birth year: ${result.birth_year}, 
        Vehicles: ${finalV}, 
        Starships: ${finalS}`
    )
}

handleFetch(1)