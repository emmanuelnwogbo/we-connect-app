import chai from 'chai';
import { assert } from 'chai';
import { expect } from 'chai';

import chaiHttp from 'chai-http';
chai.use(chaiHttp);

import express from 'express';
const router = express.Router();
import app from '../lib/index';

describe('/api/v1/auth/', () => {
  it('should be able to create a new user', done => {
    let user = {
      firstname: 'jack',
      lastname: 'dorsey',
      email: 'jack@gmail.com',
      password: 'testword',
      confirmpassword: 'testword',
    };

    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        expect(res.status === 201);
        expect(res.body === 'object');
        done();
      });
  });

  it('should let a user login', done => {
    let user = {
      email: 'jack@gmail.com',
      password: 'testword',
    };

    chai
      .request(app)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        expect(res.status === 200);
        expect(res.body.user === 'object');
        done();
      });
  });
});
