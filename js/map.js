function mapInit () {
  // initialize Google Maps BEGIN
  var map = new google.maps.Map(document.getElementById("koffeeMap"),{ // Call method Map which takes in 2 arguments: reference to element to place map in and and object containing the map options
    center: { lat: 33.6937232, lng: -117.8055461 },                    // center is a property of map which is assigned to an object with two keys: lat and lng and assigns them numeric values. This will initialize a focal point for the map
    zoom: 13,                                                          // zoom is a property of map which is assigned to a numeric value indicating the zoom level (Higher #s are close, lower #s are far)
    keyboardShortcuts: false,                                          // keyboardShortcuts is a property of map which is assigned to a boolean value indicating if the user can use keyboard shortcuts
    rotateControl: false,                                              // rotateControl is a property of map which is assigned to a boolean value indicating if the user has rotation control
    scrollwheel: false                                                 // scrollwheel is a property of map which is assigned to a boolean value indicating if the user can zoom via scrollwheel
  });
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

  // HTML5 Geolocation API usage BEGIN
  var infoWindow = new google.maps.InfoWindow({ map: map });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var myPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var myMarker = new google.maps.Marker({
        position: myPosition,
        map: map,
        label: "U"
      });
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
  function handleLocationError (browserHasGeolocation, infoWindow, myPosition) {
    infoWindow.setPosition(myPosition);
    infoWindow.setContent(browserHasGeolocation ? "Error: Geolocation service failed." : "Error: Your browser does not support geolocation");
  }
  // HTML5 Geolocation API usage END

  // Bring in Google Maps Objects BEGIN
  // var latLngLimit = new google.maps.LatLngBounds;                 // Set boundary/limits of latitude and longitude
  // var allTheTraffic = new google.maps.TrafficLayer();             // Add layer for traffic detection
  // allTheTraffic.setMap(map);                                      // Call method setMap on a layer object which takes in an argument of the map you wish to add the layer to
  // var geocodeConverter = new google.maps.Geocoder;                // Add a converter for geocode (lat and lng) to address
  // var distanceCalculator = new google.maps.DistanceMatrixService; // Add a calculator to calculate the distance between origin(s) and destination(s)
  // Bring in Google Maps Objects END

  // Calculate Distances BEGIN
//   distanceCalculator.getDistanceMatrix({                                                    // Call method getDistanceMatrix on the calculator object which takes in 2 arguments: an object for the request and a callback function. The callback takes in 2 arguments: a response to the request (an object) and the status upon completion of said request
//     avoidFerries: true,                                                                     // avoidFerries is a property of a request object (unnamed) and is assigned to a boolean value indicating if the distanceCalculator should avoid ferries where possible
//     avoidTolls: true,                                                                       // avoidTolls is a property of a request object (unnamed) and is assigned to a boolean value indicating if the distanceCalculator should avoid tolls where possible
//     destinations: [markerA.position, markerB.position, markerC.position, markerD.position], // destinations is a property of request object (unnamed) and is assigned to an array containing the lat and lng values of the 4 markers which indicates exactly where the destinations are located
//     origin: myPosition,                                                              // origin is a property of a request object (unnamed) and is assigned to an object containing the numeric values of keys lat and lng
//     region: "US",                                                                           // region is a property of a request object (unnamed) and is assigned to a string value indicating the region code used for said request
//     travelMode: google.maps.TravelMode.DRIVING,                                             // travelMode is a property of a request object (unnamed) and is assigned to a constant indicating the mode of transporation. In this case, we are DRIVING
//     unitSystem: google.maps.UnitSystem.IMPERIAL                                             // unitSystem is a property of a request object (unnamed) and is assigned to a constant indicating the units of measure. In this case, we are using the IMPERIAL system (miles)
//   },function (distanceResponseObject,distanceResponseStatus) {                              // The anonymous callback function taking in 2 arguments: a response to the request (an object) and the status upon completion of said request
//     if (distanceResponseStatus !== google.maps.DistanceMatrixStatus.OK) {
//       alert("Error was: " + distanceResponseStatus);
//     } else { // if the distanceResponseStatus is OK:
//       var listOfOrigins = distanceResponseObject.originAddresses; // originAddresses is a property of distanceResponseObject which contains an array of strings
//       var listOfDestinations = distanceResponseObject.destinationAddresses; // destinationAddresses is a property of distanceResponseObject which contains an array of strings
//       var koffeeDistances = document.getElementById("koffeeDistances");
//       koffeeDistances.innerHTML = " ";
//       //deleteMarkers(markersArray);
//       // loop through the list of origins:
//       for (var origin = 0; origin < listOfOrigins.length; origin++) {
//         var originResults = distanceResponseObject.rows[origin].elements;
//         // loop through the list of destinations:
//         for (var destination = 0; destination < originResults.length; destination++) {
//           koffeeDistances.innerHTML = originResults[destination].distance.text + " in " + originResults[destination].duraton.text + "<br>"
//         }
//       }
//     }
//   });
// }
  // Calculate Distances END

//   // HTML5 Geolocation API usage BEGIN
//   var infoWindow = new google.maps.InfoWindow({ map: map });
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       var myPosition = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//       var myMarker = new google.maps.Marker({
//         position: myPosition,
//         map: map,
//         label: "U"
//       });
//       infoWindow.setPosition(myPosition);
//       infoWindow.setContent("You are here!");
//       map.setCenter(myPosition);
//     },function () {
//       handleLocationError(true,infoWindow,map.getCenter());
//     });
//   } else {
//     // no geolocation support:
//     handleLocationError(false,infoWindow,map.getCenter());
//   }
// }
// function handleLocationError (browserHasGeolocation, infoWindow, myPosition) {
//   infoWindow.setPosition(myPosition);
//   infoWindow.setContent(browserHasGeolocation ? "Error: Geolocation service failed." : "Error: Your browser does not support geolocation");
// }
