import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import notFound from './src/middlewares/notFound';
import errorHandler from './src/middlewares/errorHandler';
import airRouter from './src/routes/air';

const app = express();

app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/air', airRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
