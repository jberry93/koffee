function mapInit () {
  // initialize Google Maps BEGIN
  var mapContainer = document.getElementById("koffeeMap");
  var mapOptionsObject = {
    center: {lat: 33.6937232, lng: -117.8055461},                      // center is a property of map which is assigned to an object with two keys: lat and lng and assigns them numeric values. This will initialize a focal point for the map
    zoom: 13,                                                          // zoom is a property of map which is assigned to a numeric value indicating the zoom level (Higher #s are close, lower #s are far)
    keyboardShortcuts: false,                                          // keyboardShortcuts is a property of map which is assigned to a boolean value indicating if the user can use keyboard shortcuts
    rotateControl: false,                                              // rotateControl is a property of map which is assigned to a boolean value indicating if the user has rotation control
    scrollwheel: false                                                 // scrollwheel is a property of map which is assigned to a boolean value indicating if the user can zoom via scrollwheel
  }
  var map = new google.maps.Map(mapContainer, mapOptionsObject);
  // Initialize Google Maps END
  // Add 4 Markers BEGIN
  var markerA = new google.maps.Marker({         // Call method Marker which is assigned to an object and key value pairs indicating the information for the new marker and return the marker to new variable markerA
    position: {lat: 33.684317,lng: -117.885642}, // position is a property of markerA which is assigned to an object with 2 keys lat and lng and assigns them numeric values indicating the exact position of marker placement
    map: map,                                    // map is a property of markerA which is assigned to object map indicating which map to assign this marker to
    label: "A"                                   // label is a property of markerA which is assigned to a string value A indicating the appearance of the label to be a letter A
  });
  var markerB = new google.maps.Marker({
    position: {lat: 33.674104,lng: -117.770783},
    map: map,
    label: "B"
  });
  var markerC = new google.maps.Marker({
    position: {lat: 33.649201,lng: -117.839658},
    map: map,
    label: "C"
  });
  var markerD = new google.maps.Marker({
    position: {lat: 33.683982,lng: -117.836618},
    map: map,
    label: "D"
  });
  // Add 4 Markers END
  // Marker Positions BEGIN
  var positionA = {
    lat: 33.684317,
    lng: -117.885642
  }
  var positionB = {
    lat: 33.674104,
    lng: -117.770783
  }
  var positionC = {
    lat: 33.649201,
    lng: -117.839658
  }
  var positionD = {
    lat: 33.683982,
    lng: -117.836618
  }
  // Marker Positions END
  // HTML5 Geolocation API usage BEGIN
  var infoWindow = new google.maps.InfoWindow({ map: map });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
  } else {
    // no geolocation support:
    alert("Please enable geolocation");
  }
  function showLocation(position) {
    var myPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    var myMarkerOptions = {
      position: myPosition,
      map: map,
      label: "U"
    };
    var myMarker = new google.maps.Marker(myMarkerOptions);
    map.setCenter(myPosition);
    // Distance Calculations BEGIN
    function radians(degrees) {
      var convert = (degrees * Math.PI) / 180;
      return convert;
    }
    function haversine(markerPosition) {
      var latDifference = radians(markerPosition.lat - position.coords.latitude);
      var lngDifference = radians(markerPosition.lng - position.coords.longitude);
      var radius = 3961;
      var a = Math.pow(Math.sin(latDifference / 2), 2) + Math.cos(radians(position.coords.latitude)) * Math.cos(radians(markerPosition.lat)) * Math.pow(Math.sin(lngDifference / 2), 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = radius * c;
      return d;
    }
    // Distance Calculations END
    // Display Results BEGIN
    var outputDiv = document.getElementById("distances");
    outputDiv.innerHTML = "<p>Marker A is " + haversine(positionA).toFixed(2) + " miles away!" + "</p>" + "<p>Marker B is " + haversine(positionB).toFixed(2) + " miles away!" + "</p>" + "<p>Marker C is " + haversine(positionC).toFixed(2) + " miles away!" + "</p>" + "<p>Marker D is " + haversine(positionD).toFixed(2) + " miles away!" + "</p>";
    // Display Results END
  }
  // HTML5 Geolocation API usage END
}
