function mapInit () {
  var map = new google.maps.Map(document.getElementById("koffeeMap"),{
    center: { lat: 33.6937232, lng: -117.8055461 },
    zoom: 13,
    keyboardShortcuts: false,
    rotateControl: false,
    scrollwheel: false
  });
  // Markers BEGIN
  var tokyoLatte = new google.maps.Marker({
    position: {lat: 33.684317,lng: -117.885642},
    map: map,
    label: "Tokyo Latte Truck"
  });
  var jonSnow = new google.maps.Marker({
    position: {lat: 33.674104,lng: -117.770783},
    map: map,
    label: "Jon Snow Truck"
  });
  var theAmerican = new google.maps.Marker({
    position: {lat: 33.649201,lng: -117.839658},
    map: map,
    label: "The American Truck"
  });
  var mokaccino = new google.maps.Marker({
    position: {lat: 33.683982,lng: -117.836618},
    map: map,
    label: "Mokaccino Truck"
  });
  // Markers END
  // Add layer for traffic detection:
  var allTheTraffic = new google.maps.TrafficLayer();
  allTheTraffic.setMap(map);
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
