// var requestObject = {
//   type: "GET",
//   dataType: "jsonp",
//   cache: false,
//   url: "https://api.instagram.com/v1/tags/latteart/media/recent?client_id=7f82f487f342497485a982e5bf023d46&access_token=1594020.7f82f48.af1cdd81330e4fd9859f55d9ee2478c6",
//   success: function(data) {
//     for (var pic = 0; pic < 8; pic++) {
//       $(".coffeePics").append("<li><a target='_blank' href='" + data.data[pic].link + "'><img src='" + data.data[pic].images.low_resolution.url + "'></img></a></li>");
//     }
//   }
// }
// $.ajax(requestObject);

var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://api.instagram.com/v1/tags/latteart/media/recent?client_id=7f82f487f342497485a982e5bf023d46&access_token=1594020.7f82f48.af1cdd81330e4fd9859f55d9ee2478c6", true);
// httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
httpRequest.onreadystatechange = function() {
  if(httpRequest.status === 200) {
    console.log("success!");
    console.log(httpRequest.responseText);
    // var coffeePics = document.getElementById("coffeePics");
    // for(var pic = 0; pic < 5; pic++) {
    //   coffeePics.innerHTML = "<li><a target='_blank' href='" + data.data[pic].link + "'><img src='" + data.data[pic].images.low_resolution.url + "'></img></a></li>";
    // }
  } else {
    console.log("error!");
  }
}
httpRequest.send();
