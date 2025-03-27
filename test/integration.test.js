const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Integration Test: Nginx Web Server', () => {
  it('should return status 200 and the greeting from the HTML file', (done) => {
    chai.request('http://localhost:8080')  // Corrected URL format
      .get('/')
      .end((err, res) => {
        if (err) {
          console.error("Request Error:", err.message);
          return done(err);  // Ensures Mocha correctly handles errors
        }

        console.log("Response Status:", res.status);
        console.log("Response Body:", res.text);

        expect(res).to.have.status(200);  // Check HTTP status
        expect(res.text).to.include('Hello from Docker!');  // Validate response content
        done();
      });
  });
});
