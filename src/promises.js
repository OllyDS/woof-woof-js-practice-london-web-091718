const getPups = () =>
    fetch('http://localhost:3000/pups')
    .then(resp => resp.json())

const updatePup = pup =>
    fetch(`http://localhost:3000/pups/${pup.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pup)
    })