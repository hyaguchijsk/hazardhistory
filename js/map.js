$(function() {
    var map = L.map('map');

    function initMap() {
        map.setView([38.018353, 138.368082], 5);
        var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        });
        tileLayer.addTo(map);
    }

    initMap();
});
