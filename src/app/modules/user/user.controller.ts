import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;

    const result = await UserServices.createStudentIntoDB(password, student);

    res.status(200).json({
      success: true,
      message: 'Student is successfuly created👌',
      data: result,
    });
  } catch (error) {
    next(error);
    // res.status(500).json({
    //   success: false,
    //   message: 'Student is not successfuly created😴',
    //   data: error,
    // });
  }
};

export const userControllers = {
  createStudent,
};
