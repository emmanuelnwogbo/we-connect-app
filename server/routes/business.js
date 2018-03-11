import express from 'express';
import fs from 'fs';
import _ from 'lodash';

let data = fs.readFileSync('db/businesses.json');
let businesses = JSON.parse(data);

let user = JSON.parse(fs.readFileSync('db/newUser.json'));

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(businesses);
});

router.post('/', (req, res, next) => {
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
});

router.patch('/:id', (req, res, next) => {
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
});

router.delete('/:id', (req, res, next) => {
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
});

/*router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  console.log(id);
  _.forEach(businesses, business => {
    if (business.id === id) {
      return res.status(200).json(business);
    }
  });
}

/*router.get('/api/v1/businesses', (req, res, next) => {
  let id = req.params.id;
  let locationQuery = req.query.location;
  let categoryQuery = req.query.category;

  let results = [];

  if (locationQuery || categoryQuery) {
    businesses.map(business => {
      if (
        business.location.includes(locationQuery) ||
        business.category.includes(categoryQuery)
      ) {
        results.push(business);
      }
    });
    return res.json(results).status(200);
  }

  res.json(businesses).status(200);
});

router.post('/api/v1/business/:id/reviews', (req, res, next) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['review']);
});

router.get('/api/v1/businesses/:id/reviews', (req, res, next) => {
  let id = req.params.id;

  businesses.map(business => {
    if (business.id === id) {
      return res.json(business.reviews).status(200);
    }
  });
});*/

export default router;
