import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../lib';

const { expect } = chai;

chai.use(chaiHttp);

describe('Api Test', () => {
  it("should return 404 for routes that don't exist", done => {
    chai
      .request(app)
      .get('/undefined/route')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  });

  it('should return 404 for posting to routes undefined', done => {
    chai
      .request(app)
      .post('/undefined/route')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('business route tests', () => {
  it('should return 201 for a successful post', done => {
    chai
      .request(app)
      .post('/api/v1/business')
      .send({
        name: 'dancing hall',
        address: 'ikeja mall',
        category: 'art',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });

  it('should be able to get all books', done => {
    chai
      .request(app)
      .get('/api/v1/businesses')
      .end((err, res) => {
        expect(res).to.have.status(200);
        //res.body.should.be.a('array');
        done();
      });
  });
});
