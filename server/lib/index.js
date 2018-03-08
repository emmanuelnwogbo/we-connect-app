import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from '../routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/', router);

const port = 3030;

app.listen(port, () => console.log(`server started on port ${port}`));
