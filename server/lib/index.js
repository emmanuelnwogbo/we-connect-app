import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import index from '../routes/index';
import user from '../routes/user';
import business from '../routes/business';
import review from '../routes/review';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

/*app.get('*', (req, res) => {
  res.status(404).send({
    message: "this is not the page you're looking for",
  });
});*/

app.use('/documentation', index);
app.use('/api/v1/businesses/', business);
app.use('/api/v1/auth/', user);
app.use('/api/v1/review', review);

const port = 3000;

app.listen(port, function(error) {
  if (error) {
    console.log('error');
  } else {
    console.log(`server listening on port ${port}`);
  }
});

export default app;
