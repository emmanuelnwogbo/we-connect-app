import _ from 'lodash';

import dummyData from '../dummydb/dummydata';

export default class BusinessController {
  static getAllBusinesses(req, res, next) {
    res.status(201).json('user created');
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
