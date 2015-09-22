var express = require("express"),
    app = express(),
    path = require("path");
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// })
app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/instagram.html"));
  console.log("HTML sent!");
})
app.get("/instagram.js", function(request, response) {
  response.sendFile(path.join(__dirname + "/instagram.js"));
  console.log("JS sent!");
})
app.get("/instagram.css", function(request, response) {
  response.sendFile(path.join(__dirname + "/instagram.css"));
  console.log("CSS sent!");
})
app.listen(8080);
console.log("Go to port 8080!");
