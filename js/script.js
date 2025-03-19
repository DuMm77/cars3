// Complete car database with specifications
const carData = {
    // PORSCHE MODELS
    'Porsche 911 GT3 RS': {
        brand: 'Porsche',
        engine: '4.0L Naturally Aspirated Flat-6',
        power: '518 hp @ 8,400 rpm',
        torque: '346 lb-ft @ 6,250 rpm',
        acceleration: '0-60 mph in 3.0s',
        topSpeed: '184 mph',
        transmission: '7-speed PDK',
        weight: '3,268 lbs',
        features: [
            'DRS System',
            'Carbon Fiber Components',
            'Track-focused Suspension',
            'Race Display Mode'
        ]
    },
    'Porsche 918 Spyder': {
        brand: 'Porsche',
        engine: '4.6L V8 + Electric Motors',
        power: '887 hp combined',
        torque: '944 lb-ft',
        acceleration: '0-60 mph in 2.2s',
        topSpeed: '214 mph',
        transmission: '7-speed PDK',
        weight: '3,715 lbs',
        features: [
            'Hybrid Powertrain',
            'All-wheel Drive',
            'Carbon Fiber Monocoque',
            'Active Aerodynamics'
        ]
    },

    // FERRARI MODELS
    'Ferrari SF90 Stradale': {
        brand: 'Ferrari',
        engine: '4.0L Twin-Turbo V8 + 3 Electric Motors',
        power: '986 hp combined',
        torque: '590 lb-ft',
        acceleration: '0-60 mph in 2.5s',
        topSpeed: '211 mph',
        transmission: '8-speed DCT',
        weight: '3,461 lbs',
        features: [
            'Plug-in Hybrid System',
            'All-wheel Drive',
            'eManettino Drive Modes',
            'Carbon Fiber Body'
        ]
    },

    // LAMBORGHINI MODELS
    'Lamborghini Revuelto': {
        brand: 'Lamborghini',
        engine: '6.5L V12 + Electric Motors',
        power: '1001 hp combined',
        torque: '848 lb-ft',
        acceleration: '0-60 mph in 2.5s',
        topSpeed: '217 mph',
        transmission: '8-speed DCT',
        weight: '3,906 lbs',
        features: [
            'Hybrid Powertrain',
            'All-wheel Drive',
            'Carbon Fiber Chassis',
            'Active Aerodynamics'
        ]
    },

    // MERCEDES MODELS
    'Mercedes-AMG ONE': {
        brand: 'Mercedes',
        engine: '1.6L V6 Hybrid F1-derived',
        power: '1063 hp combined',
        torque: ''unknown'',
        acceleration: '0-60 mph in 2.9s',
        topSpeed: '219 mph',
        transmission: '8-speed AMG Speedshift',
        weight: '3,737 lbs',
        features: [
            'F1-derived Powertrain',
            'Active Aerodynamics',
            'Race Mode',
            'Carbon Fiber Monocoque'
        ]
    },

    // BMW MODELS
    'BMW M5 CS': {
        brand: 'BMW',
        engine: '4.4L Twin-Turbo V8',
        power: '627 hp',
        torque: '553 lb-ft',
        acceleration: '0-60 mph in 2.9s',
        topSpeed: '190 mph',
        transmission: '8-speed M Steptronic',
        weight: '4,114 lbs',
        features: [
            'M xDrive System',
            'Carbon Fiber Roof',
            'Track-focused Suspension',
            'Carbon Ceramic Brakes'
        ]
    },

    // ASTON MARTIN MODELS
    'Aston Martin Valkyrie': {
        brand: 'Aston Martin',
        engine: '6.5L V12 + Electric Motor',
        power: '1160 hp combined',
        torque: '664 lb-ft',
        acceleration: '0-60 mph in 2.5s',
        topSpeed: '250 mph',
        transmission: '7-speed Sequential',
        weight: '2,800 lbs',
        features: [
            'Adrian Newey Design',
            'Carbon Fiber Structure',
            'Active Aerodynamics',
            'F1-inspired Technology'
        ]
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Handle car card clicks
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('info-btn')) {
                const carName = this.querySelector('h2').textContent;
                showCarDetails(carName);
            }
        });
    });

    // Handle modal close button
    const closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (e.target === modal) {
                closeModal();
            }
        });
    });
});

// Function to show car details
function showCarDetails(carName) {
    const car = carData[carName];
    if (!car) return;

    const modal = document.getElementById('carModal');
    const modalContent = modal.querySelector('.car-details');

    modalContent.innerHTML = `
        <h2>${carName}</h2>
        <div class="specs-grid">
            <div class="spec-card">
                <h3>Engine</h3>
                <p>${car.engine}</p>
            </div>
            <div class="spec-card">
                <h3>Power</h3>
                <p>${car.power}</p>
            </div>
            <div class="spec-card">
                <h3>Acceleration</h3>
                <p>${car.acceleration}</p>
            </div>
            <div class="spec-card">
                <h3>Top Speed</h3>
                <p>${car.topSpeed}</p>
            </div>
            <div class="spec-card">
                <h3>Transmission</h3>
                <p>${car.transmission}</p>
            </div>
            <div class="spec-card">
                <h3>Weight</h3>
                <p>${car.weight}</p>
            </div>
        </div>
        <div class="features-list">
            <h3>Key Features</h3>
            <ul>
                ${car.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;

    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// Handle navigation highlighting
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Call highlight function when page loads
highlightCurrentPage();