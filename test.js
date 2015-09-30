var express = require("express"),
    request = require("supertest");

describe("Express Backend Test", function() {
  var app = express();
  app.get("/", function(request, response) {
    response.sendStatus(200);
  });

  it("status code 200", function(done) {
    request.agent(app)
      .get("/")
      .expect(200)
      .end(done);
  });
});
