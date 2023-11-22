import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;

    const result = await StudentServices.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: 'Student is successfuly created👌',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Student is not successfuly created😴',
      data: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All student retrieved successfully👨🏾‍🦯',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'All student can not retrieved successfully😴',
      data: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = await req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'A student is retrieved successfully🤷‍♂️',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'A student is not retrieved successfully😪',
      data: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
