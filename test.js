var request = require("supertest")("http://localhost:8080");

describe("Status Code Test", function() {
  it("status code /", function(done) {
    request
      .get("/")
      .expect(200)
      .end(done);
  });

  it("status code /order", function(done) {
    request
      .get("/order")
      .expect(200)
      .end(done);
  });

  it("status code /map", function(done) {
    request
      .get("/map")
      .expect(200)
      .end(done);
  });

  it("status code /how-it-works", function(done) {
    request
      .get("/how-it-works")
      .expect(200)
      .end(done);
  });

  it("status code /menu", function(done) {
    request
      .get("/menu")
      .expect(200)
      .end(done);
  });

  it("status code /careers", function(done) {
    request
      .get("/careers")
      .expect(200)
      .end(done);
  });
});
