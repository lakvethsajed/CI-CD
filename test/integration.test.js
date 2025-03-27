const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Integration Test: Nginx Web Server', function() {
  it('should return status 200 and the greeting from the HTML file', function(done) {
    chai.request('http://localhost:8080')
      .get('/')
      .end((err, res) => {
        console.log("Error:", err);
        console.log("Response:", res?.text);
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.text).to.include('Hello, World!');
        done();
      });
  });
});
