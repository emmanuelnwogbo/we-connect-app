import _ from 'lodash';
import jwt from 'jsonwebtoken';

class UserController {
  static postUser(req, res) {
    res.send('hello there');
  }

  static loginUser(req, res) {
    res.send('hello there user');
  }
}

export default UserController;
