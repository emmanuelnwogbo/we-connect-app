import dummydata from '../../dummydb/dummydata';

export default class UserMiddlewares {
  static userFinder(body, req, res, next) {
    if (body.password.length < 5) {
      return res.status(400).json({ message: 'password length to small' });
    }

    const userData = dummydata.filter(data => data.id === body.id);

    if (userData[0]) {
      if (userData[0].id === body.id) {
        return res.status(200).json({ message: `you're logged in`, userData });
      }
    }

    return res.status(401).json({ message: `invalid login details` });
  }

  static passwordCheck(body, req, res, next) {
    if (body.hasOwnProperty('confirmpassword')) {
      if (body.password.length < 5 || body.confirmpassword.length < 5) {
        return res.status(400).json({ message: 'password length to small' });
      }

      if (body.password !== body.confirmpassword) {
        return res.status(400).json({ message: `passwords don't match` });
      }

      let newUser = body;
      delete newUser.confirmpassword;
      return res.status(201).json({ message: `new user created`, newUser });
    }
  }
}
