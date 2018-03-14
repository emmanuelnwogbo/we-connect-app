import _ from 'lodash';
import dummyData from '../dummydb/dummydata';

export default class UserController {
  static createUser(req, res, next) {
    res.status(201).json('user created');
  }

  static loginUser(req, res, next) {
    res.status(200).json('user logged in');
  }
}
