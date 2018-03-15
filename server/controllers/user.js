import _ from 'lodash';
import dummyData from '../dummydb/dummydata';

import UserMiddlewares from '../middleware/UserMiddlewares';
const { passwordCheck, userFinder } = UserMiddlewares;

import UtilityMiddlewares from '../middleware/UtilityMiddlewares';

const { isEmail, isEmpty } = UtilityMiddlewares;

export default class UserController {
  static createUser(req, res, next) {
    let body = _.pick(req.body, [
      'firstname',
      'lastname',
      'email',
      'password',
      'confirmpassword',
    ]);

    let emailCheck = isEmail(body.email);
    let firstnameCheck = isEmpty(body.firstname);
    let lastnameCheck = isEmpty(body.lastname);

    if (!emailCheck) {
      return res.status(400).json({ message: 'invalid email' });
    }

    if (!firstnameCheck || !lastnameCheck) {
      return res.status(400).json({ message: 'name fields cannot be empty' });
    }

    passwordCheck(body, req, res, next);
  }

  static loginUser(req, res, next) {
    let body = _.pick(req.body, ['email', 'password', 'id']);

    userFinder(body, req, res, next);
  }
}
