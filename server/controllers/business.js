import fs from 'fs';
import _ from 'lodash';

let data = fs.readFileSync('db/businesses.json');
let businesses = JSON.parse(data);

let user = JSON.parse(fs.readFileSync('db/newUser.json'));

export default class BusinessController {
  static getAllBusinesses(req, res, next) {
    let id = req.params.id;
    let locationQuery = req.query.location;
    let categoryQuery = req.query.category;

    let results = [];

    if (locationQuery || categoryQuery) {
      _.forEach(businesses, business => {
        if (
          business.address.includes(locationQuery) ||
          business.category.includes(categoryQuery)
        ) {
          results.push(business);
        }
      });

      return res.status(200).json(results);
    }
    return res.status(200).json(businesses);
  }

  static addNewBusiness(req, res, next) {
    let body = _.pick(req.body, ['id', 'name', 'location', 'category']);

    if (body.id !== user.id) {
      return res.status(401).json({ message: `you are not logged in` });
    }

    _.forEach(businesses, business => {
      if (business.name === body.name) {
        return res.status(403).json({
          message: `that business belongs to someone already, contact us if you think there's been a mistake`,
        });
      }
    });

    body.id = '20';

    let newBusiness = JSON.stringify(body, null, 2);
    fs.writeFile('db/newBusiness.json', newBusiness, err => {
      if (err) {
        return console.log(err);
      }

      return res
        .status(201)
        .json(JSON.parse(fs.readFileSync('db/newBusiness.json')));
    });
  }

  static editBusiness(req, res, next) {
    let id = req.params.id;
    let body = _.pick(req.body, ['id', 'name', 'location', 'category']);

    if (body.id !== user.id) {
      return res.status(401).json({ message: `you are not logged in` });
    }

    let business = JSON.stringify(body, null, 2);
    fs.writeFile('db/newBusiness.json', business, err => {
      if (err) {
        return console.log(err);
      }

      return res
        .status(200)
        .json(JSON.parse(fs.readFileSync('db/newBusiness.json')));
    });
  }

  static deleteBusiness(req, res, next) {
    let id = req.params.id;
    let body = _.pick(req.body, ['id']);

    if (body.id !== user.id) {
      return res.status(401).json({ message: `you are not logged in` });
    }

    let business = JSON.parse(fs.readFileSync('db/newBusiness.json'));

    if (id !== business.id) {
      return res.status(404).json({ message: `no such business exists` });
    }

    business = JSON.stringify(
      { message: `your business was deleted successfully` },
      null,
      2
    );
    fs.writeFile('db/newBusiness.json', business, err => {
      if (err) {
        return console.log(err);
      }

      return res
        .status(200)
        .json(JSON.parse(fs.readFileSync('db/newBusiness.json')));
    });
  }

  gettingBusiness(business) {
    if (!business) {
      return res.status(404).json({ message: 'no such business exists' });
    }
  }

  static getOneBusiness(req, res, next) {
    let id = req.params.id;
    let result = false;

    _.forEach(businesses, business => {
      let bus = false;
      if (business.id === id) {
        //res.status(200).json(business);
        bus = business;
        return res.status(200).json(bus);
      }
    });
  }

  static getBusinessesOfCategory(req, res, next) {}
}
