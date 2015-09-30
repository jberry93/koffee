var express = require("express"),
    app = express();

app.get("/", function(request, response) {
  response.send(200);
});

app.listen(1337);

console.log("listening on fancy port 1337!");
