function mapInit () {
  var map = new google.maps.Map(document.getElementById("koffeeMap"),{
    center: { lat: 33.6937232, lng: -117.8055461 },
    zoom: 13,
    //draggable: false,
    keyboardShortcuts: false,
    rotateControl: false,
    scrollwheel: false,
    zoomControl: false
  });
}
