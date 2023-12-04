import express, { Router } from 'express';
import { userControllers } from './user.controller';

const router: Router = express.Router();

router.post('/create-student', userControllers.createStudent);

export const userRoutes = router;
