import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes/index';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.use(globalErrorHandler);

app.use(notFound);
export default app;
