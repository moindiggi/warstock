async function loadVehicles() {
    const response = await fetch('vehicles.json');
    const vehicles = await response.json();
    renderVehicles(vehicles);
}

function renderVehicles(vehicles) {
    const container = document.getElementById('vehicle-list');
    container.innerHTML = '';
    vehicles.forEach(vehicle => {
        const card = `
            <div class="vehicle-card">
                <img src="\${vehicle.image}" alt="\${vehicle.name}">
                <h3>\${vehicle.name}</h3>
                <p>\${vehicle.price}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}

async function filterVehicles(category) {
    const response = await fetch('vehicles.json');
    let vehicles = await response.json();
    if (category !== 'All') {
        vehicles = vehicles.filter(v => v.category === category);
    }
    renderVehicles(vehicles);
}

loadVehicles();