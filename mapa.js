let map = L.map('map').setView([-16.40408, -71.55162], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18)
});

//marcador
L.marker([-16.41350,-71.53438]).addTo(map).bindPopup(`
    <h5>La Pampilla</h5>
    <p>PP=0.0</p>
`);
L.marker([-16.488200,-71.333800]).addTo(map).bindPopup(`
    <h5>Tuctumpaya</h5>
    <p>PP=0.0</p>
`);


var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);

// Agregar escala
new L.control.scale({imperial: false}).addTo(map);