function mapInit () {
  var map = new google.maps.Map(document.getElementById("koffeeMap"),{
    center: { lat: 33.6937232, lng: -117.8055461 },
    zoom: 13,
    //draggable: false,
    keyboardShortcuts: false,
    rotateControl: false,
    scrollwheel: false
  });
  // Geolocation BEGIN
  var infoWindow = new google.maps.InfoWindow({ map: map });
  // geolocation via HTML5:
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var myPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.setPosition(myPosition);
      infoWindow.setContent("You are here!");
      map.setCenter(myPosition);
    },function () {
      handleLocationError(true,infoWindow,map.getCenter());
    });
  } else {
    // no geolocation support:
    handleLocationError(false,infoWindow,map.getCenter());
  }
}
function handleLocationError (browserHasGeolocation, infoWindow, myPosition) {
  infoWindow.setPosition(myPosition);
  infoWindow.setContent(browserHasGeolocation ? "Error: Geolocation service failed." : "Error: Your browser does not support geolocation");
}
// Geolocation END
