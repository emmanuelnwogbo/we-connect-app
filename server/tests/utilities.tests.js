import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../lib/index';

import UtilityMiddlewares from '../middleware/UtilityMiddlewares';

const { isEmail, isEmpty } = UtilityMiddlewares;

const { assert, should, expect } = chai;

let chaiShould = should();

describe('isEmail', () => {
  it('should return false if string is not an email', done => {
    let word = isEmail('michealtestgmail');
    assert.equal(word, false);
    done();
  });
  it('should return true if string is an email', done => {
    let word = isEmail('michealtest@gmail.com');
    assert.equal(word, true);
    done();
  });
});

describe('isEmpty', () => {
  it('should return false if string is empty', done => {
    let word = isEmpty('');
    assert.equal(word, false);
    done();
  });
  it('should return true if string is not empty', done => {
    let word = isEmpty('hello dance');
    assert.equal(word, true);
    done();
  });
});
