import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Routers from '../routes';

let { indexRouter, businessRouter, userRouter } = Routers;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.get('*', (req, res) => {
  res.status(404).send({
    message: "this is not the page you're looking for",
  });
});

app.use('/documentation', indexRouter);
app.use('/api/v1/businesses/', businessRouter);
app.use('/api/v1/auth/', userRouter);

const port = 3030;

app.listen(port, () => console.log(`server started on port ${port}`));

export default app;
