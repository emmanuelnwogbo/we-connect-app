import fs from 'fs';
import _ from 'lodash';

let data = fs.readFileSync('db/users.json');
let users = JSON.parse(data);

let businessData = fs.readFileSync('db/businesses.json');
let businesses = JSON.parse(businessData);

let reviewData = fs.readFileSync('db/reviews.json');
let reviews = JSON.parse(reviewData);

export default class ReviewController {
  static addReview(req, res, next) {
    let id = req.params.businessid;
    let body = _.pick(req.body, ['id', 'body', 'user']);

    _.forEach(businesses, business => {
      if (business.id === id) {
        business.review = body;
        res.status(201).json(business);
      }
    });
  }

  static getBusinessReviews(req, res, next) {
    let id = req.params.businessid;
    let results = [];

    _.forEach(reviews, review => {
      if (review.id === id) {
        results.push(review);
      }
    });

    res.status(200).json(results);
  }
}
