var express = require("express"),
    app = express(),
    path = require("path");

app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/html/index.html"));
});
app.get("/order", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/html/order.html"));
});
app.get("/map", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/html/map.html"));
});
app.get("/how-it-works", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/html/howitworks.html"));
});
app.get("/menu", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/html/menu.html"));
});
app.get("/careers", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/html/careers.html"));
});

app.use(express.static("public"));

app.listen(8080);

console.log("Listening on boring port 8080!");
