import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../lib/index';

const { assert, should, expect } = chai;

let chaiShould = should();

chai.use(chaiHttp);

import testdata from './business.test.data';
const {
  newBusiness,
  updatedBusiness,
  updatedBusinessByUnloggedInUser,
  loggedInUser,
  notloggedInUser,
  emptyReviewloggedInUser,
} = testdata;

describe('/api/v1/businesses', () => {
  it('should get all businesses', done => {
    chai
      .request(app)
      .get('/api/v1/businesses')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('it should get all businesses in a particular location', done => {
    chai
      .request(app)
      .get('/api/v1/businesses?location=portharcourt')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('it should get all businesses in a particular category', done => {
    chai
      .request(app)
      .get('/api/v1/businesses?category=steel')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should only a logged in user post a business', done => {
    chai
      .request(app)
      .post('/api/v1/businesses?category=steel')
      .send(newBusiness)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});

describe('/api/v1/businesses/:businessid', () => {
  it('should let a logged in user update his business', done => {
    chai
      .request(app)
      .patch('/api/v1/businesses/1')
      .send(updatedBusiness)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should let only a logged in user update his business', done => {
    chai
      .request(app)
      .patch('/api/v1/businesses/1')
      .send(updatedBusinessByUnloggedInUser)
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
  it('business id must belong to an actual business', done => {
    chai
      .request(app)
      .patch('/api/v1/businesses/60')
      .send(updatedBusiness)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('/api/v1/businesses/:businessid', () => {
  it('should let a user delete their business', done => {
    chai
      .request(app)
      .delete('/api/v1/businesses/2')
      .send(loggedInUser)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should let only logged in users delete thier own business', done => {
    chai
      .request(app)
      .delete('/api/v1/businesses/2')
      .send(notloggedInUser)
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
});

describe('/api/v1/businesses/:businessid', () => {
  it('should let users get a particular business', done => {
    chai
      .request(app)
      .get('/api/v1/businesses/2')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should return status 404 if business does not exist', done => {
    chai
      .request(app)
      .get('/api/v1/businesses/80')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('/api/v1/businesses/:businessid/reviews', () => {
  it('should be able to let a logged in user post a review', done => {
    chai
      .request(app)
      .post('/api/v1/businesses/1/reviews')
      .send(loggedInUser)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should prevent a user who is not logged in from posting a review', done => {
    chai
      .request(app)
      .post('/api/v1/businesses/1/reviews')
      .send(notloggedInUser)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
  it('should not let a user post an empty review', done => {
    chai
      .request(app)
      .post('/api/v1/businesses/1/reviews')
      .send(emptyReviewloggedInUser)
      .end((err, res) => {
        res.should.have.status(406);
        done();
      });
  });
  it('should return 404 status if no such business exists', done => {
    chai
      .request(app)
      .post('/api/v1/businesses/90/reviews')
      .send(loggedInUser)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('/api/v1/businesses/:businessid/reviews', () => {
  it('should should be able to get a businesses reviews', done => {
    chai
      .request(app)
      .get('/api/v1/businesses/1/reviews')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('return 404 if said businessid does not exist', done => {
    chai
      .request(app)
      .get('/api/v1/businesses/89/reviews')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
