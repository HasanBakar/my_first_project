import { Schema, model } from 'mongoose';
import validator from 'validator';

import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const studentNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required.'],
    maxlength: [20, 'First name is maximum 20 characters'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const capitalizeString =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        return value === capitalizeString;
      },
      message: '{VALUE} is not properly capitalized😗',
    },
  },
  middleName: { type: String, trim: true },
  lastName: {
    type: String,
    required: [true, 'Last Name is required.'],
    trim: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid👧🏾',
    },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father Name is required.'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father Occupation is required.'],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father Contact Number is required.'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother Name is required.'],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother Occupation is required.'],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact Number is required.'],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, 'Local Guardian Name is required.'] },
  occupation: {
    type: String,
    required: [true, 'Local Guardian Occupation is required.'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local Guardian Contact Number is required.'],
  },
  address: {
    type: String,
    required: [true, 'Local Guardian Address is required.'],
  },
});

const studentSchema = new Schema<TStudent>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required.'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'userID is required.'],
      unique: true,
      ref: 'User',
    },
    name: {
      type: studentNameSchema,
      required: [true, 'Student Name is required.'],
      trim: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message:
          "The gender field can only be one of the following: 'male', 'female', or 'other'.",
      },
      required: [true, 'Gender is required.'],
    },
    dateOfBirth: { type: String },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
    },
    contactNo: {
      type: String,
      required: [true, 'Contact Number is required.'],
    },
    emergencyContactNo: {
      type: String,
      required: [true, 'Emergency Contact Number is required.'],
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
    },
    presentAddress: {
      type: String,
      required: [true, 'Present Address is required.'],
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent Address is required.'],
      trim: true,
    },
    guardian: {
      type: guardianSchema,
      required: [true, 'Guardian information is required.'],
      trim: true,
    },
    localGuardian: {
      type: localGuardianSchema,
      required: [true, 'Local Guardian information is required.'],
    },
    profileImage: { type: String },
  },
  {
    timestamps: true,
  },
);

export const StudentModel = model<TStudent>('Student', studentSchema);
