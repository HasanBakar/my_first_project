export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  status: 'in-progress' | 'blocked';
  role: 'Admin' | 'Student' | 'Faculty';
  isDeleted: boolean;
};
