import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All student retrieved successfully👨🏾‍🦯',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = await req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'A student is retrieved successfully🤷‍♂️',
      data: result,
    });
  } catch (error) {
    next(error);
    // res.status(500).json({
    //   success: false,
    //   message: 'A student is not retrieved successfully😪',
    //   data: error,
    // });
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
