import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.module';
import { TUser } from './user.interface';
import { User } from './user.module';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given than we use default password
  userData.password = password || (config.default_pass as string);
  // set student role
  userData.role = 'Student';
  // set menually generated id
  userData.id = '2030100001';
  // create a user
  const newUser = await User.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id; // embedding id
    studentData.user = newUser._id; //reference _id
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
