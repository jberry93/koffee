function mapInit() {
  alert("Map has been initialized!");
  var map = new google.maps.Map(document.getElementById("koffeeMap"), {
    center: {lat: 33.6937232, lng: -117.8055461},                    // center is a property of map which is assigned to an object with two keys: lat and lng and assigns them numeric values. This will initialize a focal point for the map
    zoom: 13,                                                          // zoom is a property of map which is assigned to a numeric value indicating the zoom level (Higher #s are close, lower #s are far)
    keyboardShortcuts: false,                                          // keyboardShortcuts is a property of map which is assigned to a boolean value indicating if the user can use keyboard shortcuts
    rotateControl: false,                                              // rotateControl is a property of map which is assigned to a boolean value indicating if the user has rotation control
    scrollwheel: false                                                 // scrollwheel is a property of map which is assigned to a boolean value indicating if the user can zoom via scrollwheel
  });
  //marker BEGIN
  var markerA = new google.maps.Marker({
    position: {lat: 33.684317,lng: -117.885642},
    map: map,
    label: "A"
  });
  var positionA = {lat: 33.684317,lng: -117.885642};
  var markerB = new google.maps.Marker({
    position: {lat: 33.674104,lng: -117.770783},
    map: map,
    label: "B"
  });
  var positionB = {lat: 33.674104,lng: -117.770783};
  var markerC = new google.maps.Marker({
    position: {lat: 33.649201,lng: -117.839658},
    map: map,
    label: "C"
  });
  var positionC = {lat: 33.649201,lng: -117.839658};
  var markerD = new google.maps.Marker({
    position: {lat: 33.683982,lng: -117.836618},
    map: map,
    label: "D"
  });
  var positionD = {lat: 33.683982,lng: -117.836618};
  //marker END
  alert("Markers have been added!");
  var matrixService = new google.maps.DistanceMatrixService();
  var requestObject = {
    origins: [{lat:33.668131,lng:-117.863560}, {lat:33.698708,lng:-117.837938}],
    destinations: [positionA,positionB,positionC,positionD],
    travelMode: google.maps.TravelMode.DRIVING,
    avoidTools: true,
    avoidFerries: true
  }
  matrixService.getDistanceMatrix(requestObject, callback);
  alert("Request sent!");
  alert(requestObject);
  alert(DistanceMatrixResponse);
  alert(DistanceMatrixStatus);
  function callback(response, status) {
    //Parse results
    alert("Callback has been initiated");
    if (status === google.maps.DistanceMatrixStatus.OK) {
      alert("Request was a success!");
      // var origins = response.originAddresses;
      // var destinations = response.destinationAddresses;
      // for (var i = 0; i < origins.length; i++) {
      //   var results = response.rows[i].elements;
      //   for (var j = 0; j < results.length; j++) {
      //     var element = results[j];
      //     var distance = element.distance.text;
      //     var duration = element.duration.text;
      //     var from = origins[i];
      //     var to = destinations[j];
      //   }
      // }
    } else if (status === google.maps.DistanceMatrixStatus.REQUEST_DENIED) {
      alert("Request has been denied");
    } else if (status === google.maps.DistanceMatrixStatus.UNKNOWN_ERROR) {
      alert("Request was not processed due to server error");
    } else {
      alert("Something strange happened");
    }
  }
}
