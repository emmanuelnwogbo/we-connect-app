import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../lib/index';

const { assert, should, expect } = chai;

let chaiShould = should();

chai.use(chaiHttp);

import BusinessController from '../controllers/business';
import dummyData from '../dummydb/dummydata';

/*let {
  getAllBusinesses,
  addNewBusiness,
  editBusiness,
  deleteBusiness,
  getOneBusiness,
  getBusinessesByCategory,
  addReviewToBusiness,
  getBusinessReviews,
} = BusinessController;*/
