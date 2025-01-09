document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('mapa').setView([-23.6017, -47.0297], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([-23.613491, -47.073831]).addTo(map);
    marker.bindPopup("Chácara dos Pássaros<br>São Roque<br>SP").openPopup();
});
