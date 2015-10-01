function callbackFunction(instaData) {
  var coffeePics = document.getElementById("coffeePics");
  for(var pic = 0; pic < 8; pic++) {
    coffeePics.innerHTML += "<li><a href='" +
                            instaData.data[pic].link +
                            "'><img src='" +
                            instaData.data[pic].images.low_resolution.url + 
                            "'></img></a></li>";
  }
}
