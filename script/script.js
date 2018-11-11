

mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZW50YXMxNCIsImEiOiJjam9hMzljOTcwYjR1M2ttcnk1anJ5bjcxIn0.z10TJzb_o4qO7OyrI_j8tw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [55.705201, -21.138664],
    zoom: 9
});

map.addControl(new mapboxgl.NavigationControl());



$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});