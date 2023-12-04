import express, { Application } from 'express';
import cors from 'cors';
// import { StudentRoutes } from './app/modules/student/student.route';
import { userRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
// app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', userRoutes);

app.use(globalErrorHandler);
export default app;
