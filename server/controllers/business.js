import _ from 'lodash';

import dummyData from '../dummydb/dummydata';

export default class BusinessController {
  static getAllBusinesses(req, res, next) {
    let locationQuery = req.query.location;
    let categoryQuery = req.query.category;
    let results = [];

    console.log(locationQuery);

    if (locationQuery || categoryQuery) {
      dummyData.map(data => {
        if (
          data.business.location === locationQuery ||
          data.business.category === categoryQuery
        ) {
          results.push(data.business);
        }
      });

      return res
        .status(200)
        .json({ message: `${results.length} businesses found`, results });
    }

    dummyData.map(data => {
      results.push(data.business);
    });

    return res
      .status(200)
      .json({ message: `${results.length} businesses found`, results });
  }

  static addNewBusiness(req, res, next) {
    res.status(200).json('user logged in');
  }

  static editBusiness(req, res, next) {
    res.status(201).json('user created');
  }

  static deleteBusiness(req, res, next) {
    res.status(200).json('user logged in');
  }

  static getOneBusiness(req, res, next) {
    res.status(201).json('user created');
  }

  static getBusinessesByCategory(req, res, next) {
    res.status(200).json('user logged in');
  }

  static addReviewToBusiness(req, res, next) {
    res.status(201).json('user created');
  }

  static getBusinessReviews(req, res, next) {
    res.status(200).json('user logged in');
  }
}
