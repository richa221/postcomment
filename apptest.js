/* eslint-disable no-undef */
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
var app = require("./app.js");
describe("Test case for get api",()=>{
    it("should return status 200 ", function(done) {
        chai.request(app)
            .get("/")
            .end(function(err, res){
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            });
    });
});
describe("get  player", () => {
    it("it should  get all player", (done) => {
        chai.request(app)
            .get("/players")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            });
    });
});


