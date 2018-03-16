import _ from 'lodash';

import dummyData from '../dummydb/dummydata';

import UtilityMiddlewares from '../middleware/UtilityMiddlewares';

const { isEmpty } = UtilityMiddlewares;

export default class BusinessController {
  static getAllBusinesses(req, res, next) {
    let locationQuery = req.query.location;
    let categoryQuery = req.query.category;
    let results = [];

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
    let body = _.pick(req.body, ['name', 'location', 'category']);

    let nameCheck = isEmpty(body.name);
    let locationCheck = isEmpty(body.location);
    let categoryCheck = isEmpty(body.category);

    if (!nameCheck || !locationCheck || !categoryCheck) {
      return res.status(400).json({ message: 'please fill out all fields' });
    }

    let result = [];

    dummyData.map(data => {
      if (data.business.name === body.name) {
        result.push(data.business);
        return res.status(403).json({ message: `business already exists` });
      }
    });

    if (!result[0]) {
      let newBusiness = body;
      return res.status(201).json({ message: `business created`, newBusiness });
    }
  }

  static editBusiness(req, res, next) {
    let body = _.pick(req.body, ['name', 'location', 'category', 'userid']);
    let businessid = req.params.businessid;
    let userid = body.userid;

    let user = dummyData.filter(data => data.id === userid);

    if (user[0]) {
      let result = dummyData.filter(
        data => data.business.id === Number(businessid)
      );

      if (result[0]) {
        return res.status(200).json({ message: `business edited` });
      } else {
        return res.status(404).json({ message: `business not found` });
      }
    }

    return res
      .status(403)
      .json({ message: `you must be logged in to add a business` });
  }

  static deleteBusiness(req, res, next) {
    let body = _.pick(req.body, ['userid']);
    let businessid = req.params.businessid;
    let userid = body.userid;

    let user = dummyData.filter(data => data.id === userid);

    if (user[0]) {
      let result = dummyData.filter(
        data => data.business.id === Number(businessid)
      );

      if (result[0]) {
        return res.status(200).json({ message: `business deleted` });
      } else {
        return res.status(404).json({ message: `no such business exists` });
      }
    }

    return res
      .status(403)
      .json({ message: `you must be logged in to delete a business` });
  }

  static getOneBusiness(req, res, next) {
    let businessid = req.params.businessid;

    let result = dummyData.filter(
      data => data.business.id === Number(businessid)
    );

    if (result[0]) {
      let business = result[0];
      return res.status(200).json({ message: `business found`, business });
    } else {
      return res.status(404).json({ message: `no such business exists` });
    }
  }

  static addReviewToBusiness(req, res, next) {
    let businessid = req.params.businessid;
    let body = _.pick(req.body, ['name', 'reviewBody', 'userid']);

    let reviewBodyCheck = isEmpty(body.reviewBody);

    if (!reviewBodyCheck) {
      return res.status(406).json({ message: `review cannot be empty` });
    }

    let loggedInUser = dummyData.filter(data => data.id === body.userid);

    if (loggedInUser[0] === undefined) {
      return res
        .status(401)
        .json({ message: `you must be logged in to post a review` });
    }

    let result = dummyData.filter(
      data => data.business.id === Number(businessid)
    );

    if (result[0]) {
      result[0].business.reviews.push(body);
      let reviews = result[0].business.reviews;
      return res.status(200).json({ message: `reviews found`, reviews });
    } else {
      return res.status(404).json({ message: `no such business exists` });
    }
  }

  static getBusinessReviews(req, res, next) {
    let businessid = req.params.businessid;

    let result = dummyData.filter(
      data => data.business.id === Number(businessid)
    );

    if (result[0]) {
      let reviews = result[0].business.reviews;
      return res.status(200).json({ message: `reviews found`, reviews });
    } else {
      return res.status(404).json({ message: `no such business exists` });
    }
  }
}
