var express = require("express"),
    app = express(),
    path = require("path");

app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/dist/index.html"));
});
app.get("/order", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/dist/order.html"));
});
app.get("/map", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/dist/map.html"));
});
app.get("/how-it-works", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/dist/howitworks.html"));
});
app.get("/menu", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/dist/menu.html"));
});
app.get("/careers", function(request, response) {
  response.sendFile(path.join(__dirname + "/public/dist/careers.html"));
});

app.use(express.static("public/dist"));

app.listen(8080);

console.log("Listening on boring port 8080!");
