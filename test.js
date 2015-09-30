var express = require("express"),
    request = require("supertest"),
    app = express();

app.get("/200", function(request, response) {
  response.sendStatus(200);
});

app.get("/404", function(request, response) {
  response.sendStatus(404);
});

app.get("/user", function(request, response) {
  response.send("hello user!");
});

describe("Status Code Test", function() {
  it("status code 200", function(done) {
    request.agent(app)
      .get("/200")
      .expect(200)
      .end(done);
  });

  it("status code 404", function(done) {
    request.agent(app)
      .get("/404")
      .expect(404)
      .end(done);
  });

  it("check user page", function(done) {
    request.agent(app)
      .get("/user")
      .expect(200)
      .end(done);
  });
});
