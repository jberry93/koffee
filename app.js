var express = require("express"),
    app = express();

app.get("/200", function(request, response) {
  response.sendStatus(200);
});

app.get("/404", function(request, response) {
  response.sendStatus(404);
})

app.get("/user", function(request, response) {
  response.send("hello user!");
});

app.listen(1337);

console.log("listening on fancy port 1337!");
