import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import index from '../routes/index';
import user from '../routes/user';
import business from '../routes/business';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

/*app.get('*', (req, res) => {
  res.status(404).send({
    message: "this is not the page you're looking for",
  });
});*/

app.get('/api/v1/businesses/:id', (req, res, next) => {
  console.log('hello there');
});

app.use('/documentation', index);
app.use('/api/v1/businesses', business);
app.use('/api/v1/auth/', user);

const port = 3030;

app.listen(port, () => console.log(`server started on port ${port}`));

export default app;
