function callbackFunction(data) {
  var newContent = "";
  var coffeePics = document.getElementById("coffeePics");
  for(var pic = 0; pic < 8; pic++) {
    newContent += "<li><a target='_blank' href='" + data.data[pic].link + "'><img src='" + data.data[pic].images.low_resolution.url + "'></img></a></li>";
  }
  document.write(newContent);
}
