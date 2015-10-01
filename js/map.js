function mapInit () {
  var mapContainer = document.getElementById("koffeeMap");
  var mapOptionsObject = {
    center: {lat: 33.6937232, lng: -117.8055461},
    zoom: 13,
    keyboardShortcuts: false,
    rotateControl: false,
    scrollwheel: false
  }
  var map = new google.maps.Map(mapContainer, mapOptionsObject);

  var markerA = new google.maps.Marker({
    position: {lat: 33.684317,lng: -117.885642},
    map: map,
    label: "A"
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

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
  } else {
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

    function radians(degrees) {
      var convert = (degrees * Math.PI) / 180;
      return convert;
    }

    function haversine(markerPosition) {
      var latDifference = radians(markerPosition.lat - position.coords.latitude);
      var lngDifference = radians(markerPosition.lng - position.coords.longitude);
      var radius = 3961;
      var firstSine = Math.sin(latDifference / 2);
      var secondSine = Math.sin(lngDifference / 2);
      var cosines = Math.cos(radians(markerPosition.lat)) * Math.cos(radians(position.coords.latitude));
      var innerSqrt = Math.pow(firstSine, 2) + cosines * Math.pow(secondSine, 2);
      var noRadius = 2 * Math.asin(Math.sqrt(innerSqrt));
      var distance = noRadius * radius;
      return distance;
    }

    var truckA = document.getElementById("truckA")
    var truckB = document.getElementById("truckB")
    var truckC = document.getElementById("truckC")
    var truckD = document.getElementById("truckD")
    truckA.textContent = "Truck A is " + haversine(positionA).toFixed(2) + " miles away!";
    truckB.textContent = "Truck B is " + haversine(positionB).toFixed(2) + " miles away!";
    truckC.textContent = "Truck C is " + haversine(positionC).toFixed(2) + " miles away!";
    truckD.textContent = "Truck D is " + haversine(positionD).toFixed(2) + " miles away!";
  }
}
