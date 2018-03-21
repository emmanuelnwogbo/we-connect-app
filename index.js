import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import business from './server/routes/business.route';
import index from './server/routes/index.route';
import user from './server/routes/user.route';

import models from './server/models/index.model';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api/v1/businesses/', business);
app.use('/', index);
app.use('/api/v1/auth/', user);

const PORT = process.env.PORT || 8080;

models.sequelize.sync().then(() => {
  app.listen(PORT, function(error) {
    if (error) {
      console.log('error');
    } else {
      console.log(`server listening on port ${PORT}`);
      //console.log(process.env.NODE_ENV);
    }
  });
});

export default app;
