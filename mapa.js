let map = L.map('map').setView([-16.40408, -71.55162], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18)
})

var carto_light=L.titleLayer('https://%7Bs%7D.basemaps.cartocdn.com/rastertiles/light_all/%7Bz%7D/%7Bx%7D/%7By%7D.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24})

var minimap=new L.Control.minimap(carto_light,
    {
        toogleDisplay: true,
        minimized:false,
        position: "bottomleft"
    }).addTo(map);