function callbackFunction(data) {
  var coffeePics = document.getElementById("coffeePics");
  for(var pic = 0; pic < 8; pic++) {
    coffeePics.innerHTML += "<li><a href='" + data.data[pic].link + "'><img src='" + data.data[pic].images.low_resolution.url + "'></img></a></li>";
  }
}
