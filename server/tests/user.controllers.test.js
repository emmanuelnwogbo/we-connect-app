import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../lib/index';

const { assert, should, expect } = chai;

let chaiShould = should();

chai.use(chaiHttp);

let signupDetails = {
  firstname: 'paul',
  lastname: 'doguns',
  email: 'dogun@gmail.com',
  password: 'eemmaa',
  confirmpassword: 'eemmaa',
};

let signupDetailsTwo = {
  firstname: 'paul',
  lastname: '',
  email: 'dogun@gmail.com',
  password: 'eemmaa',
  confirmpassword: 'eemmaa',
};

import dummyData from '../dummydb/dummydata';

describe('/api/v1/auth/signup', () => {
  it('it should login a new user', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetails)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it('it should not let a user login without filling in all fields', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetailsTwo)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});
