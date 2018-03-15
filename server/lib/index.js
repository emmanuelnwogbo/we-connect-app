import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import business from '../routes/business';
import index from '../routes/index';
import user from '../routes/user';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api/v1/businesses/', business);
app.use('/', index);
app.use('/api/v1/auth/', user);

const port = 3030;

app.listen(port, function(error) {
  if (error) {
    console.log('error');
  } else {
    console.log(`server listening on port ${port}`);
  }
});

export default app;
