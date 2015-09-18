function mapInit () {
  var map = new google.maps.Map(document.getElementById("koffeeMap"),{
    center: { lat: 33.6937232, lng: -117.8055461 },                    // center is a property of map which is assigned to an object with two keys: lat and lng and assigns them numeric values. This will initialize a focal point for the map
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
  var matrixService = new google.maps.DistanceMatrixService();
  matrixService.getDistanceMatrix(
    {
      origin: {lat: 33.668131,lng: -117.863560},
      destinations: [positionA,positionB,positionC,positionD],
      travelMode: google.maps.travelMode.DRIVING,
      avoidTools: true,
      avoidFerries: true
    }, callback
  );
  function callback (response,status) {
    //Parse results
    console.log(status);
    document.write(response);
    document.write(status);
    if (status === google.maps.DistanceMatrixStatus.OK) {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
      for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
          var element = results[j];
          var distance = element.distance.text;
          var duration = element.duration.text;
          var from = origins[i];
          var to = destinations[j];
        }
      }
    }
  }
}
