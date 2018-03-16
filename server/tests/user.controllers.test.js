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

let signupDetailsThree = {
  firstname: 'paul',
  lastname: 'jerry',
  email: 'dogungmail.com',
  password: 'eemmaa',
  confirmpassword: 'eemmaa',
};

let signupDetailsFour = {
  firstname: 'paul',
  lastname: 'jerry',
  email: 'dogun@gmail.com',
  password: '',
  confirmpassword: 'eemmaa',
};

let signinDetails = {
  email: 'dogun@gmail.com',
  password: 'eemmaa',
  id: 1,
};

let signinDetailsTwo = {
  email: 'dogun@gmail.com',
  password: 'eema',
  id: 1,
};

let signinDetailsThree = {
  email: 'dogun@gmail.com',
  password: 'eemmmaa',
  id: 1,
};

import dummyData from '../dummydb/dummydata';

describe('/api/v1/auth/signup', () => {
  it('should let a new user signup after all fields are completed adequately', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetails)
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
  it('should not let a user signup without properly filling out the password and confirm password fields', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetailsFour)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it('should not let a user signup without filling in all fields', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetailsTwo)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it('should not let a user signup without a valid email', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(signupDetailsThree)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
});

describe('/api/v1/auth/login', () => {
  it('should let a user login after all fields are filled adequately', done => {
    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send(signinDetails)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('should not let a user login with a password less than 5', done => {
    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send(signinDetailsTwo)
      .end((err, res) => {
        res.should.have.status(400);
        done();
      });
  });
  it('should let a user login once all fields are filled properly', done => {
    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send(signinDetailsThree)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
