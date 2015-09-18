function mapInit () {
  var displayDirections = new google.maps.DirectionsRenderer;
  var directionCalculator = new google.maps.DirectionsService;
  var map = new google.maps.Map(document.getElementById("koffeeMap"),{
    center: { lat: 33.6937232, lng: -117.8055461 },                    // center is a property of map which is assigned to an object with two keys: lat and lng and assigns them numeric values. This will initialize a focal point for the map
    zoom: 13,                                                          // zoom is a property of map which is assigned to a numeric value indicating the zoom level (Higher #s are close, lower #s are far)
    keyboardShortcuts: false,                                          // keyboardShortcuts is a property of map which is assigned to a boolean value indicating if the user can use keyboard shortcuts
    rotateControl: false,                                              // rotateControl is a property of map which is assigned to a boolean value indicating if the user has rotation control
    scrollwheel: false                                                 // scrollwheel is a property of map which is assigned to a boolean value indicating if the user can zoom via scrollwheel
  });
  displayDirections.setMap(map);
  displayDirections.setPanel(document.getElementById("koffeeDistances"));
  var control = document.getElementById("floating-panel");
  control.style.display = "block";
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
  function onChangeHandler () {
    calculateAndDisplayRoute(directionCalculator,displayDirections);
  }
  document.getElementById("start").addEventListener("change",onChangeHandler);
  document.getElementById("end").addEventListener("change",onChangeHandler);
}
function calculateAndDisplayRoute (directionCalculator,displayDirections) {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  directionCalculator.route({
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  },function (response,status) {
    if (status === google.maps.DirectionsStatus.OK) {
      displayDirections.setDirections(response);
    } else {
      window.alert("Directions request failed due to " + status);
    }
  });
}
