var express = require("express"),
    request = require("supertest"),
    path = require("path"),
    app = express();

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

describe("Status Code Test", function() {
  it("status code /", function(done) {
    request.agent(app)
      .get("/")
      .expect(200)
      .end(done);
  });

  it("status code /order", function(done) {
    request.agent(app)
      .get("/order")
      .expect(200)
      .end(done);
  });

  it("status code /map", function(done) {
    request.agent(app)
      .get("/map")
      .expect(200)
      .end(done);
  });

  it("status code /how-it-works", function(done) {
    request.agent(app)
      .get("/how-it-works")
      .expect(200)
      .end(done);
  });

  it("status code /menu", function(done) {
    request.agent(app)
      .get("/menu")
      .expect(200)
      .end(done);
  });

  it("status code /careers", function(done) {
    request.agent(app)
      .get("/careers")
      .expect(200)
      .end(done);
  });
});
