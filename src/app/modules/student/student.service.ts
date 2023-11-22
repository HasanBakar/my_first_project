import { StudentModel } from '../student.module';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  try {
    const result = await StudentModel.create(student);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllStudentsFromDB = async () => {
  try {
    const result = await StudentModel.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
