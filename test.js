var express = require("express"),
    request = require("supertest"),
    app = express();

app.get("/200", function(request, response) {
  response.sendStatus(200);
});

app.get("/404", function(request, response) {
  response.sendStatus(404);
});

describe("Express Backend Test 1", function() {
  it("status code 200", function(done) {
    request.agent(app)
      .get("/200")
      .expect(200)
      .end(done);
  });
});

describe("Express Backend Test 2", function() {
  it("status code 404", function(done) {
    request.agent(app)
      .get("/404")
      .expect(404)
      .end(done);
  });
});
