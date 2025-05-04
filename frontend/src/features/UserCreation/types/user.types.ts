export type UserDataType = {
  email: string;
  firstName: string;
  lastName: string;
  //photo: any;
  //phone: string;
  password: string;
};

export type LoginUserDatatype = {
  email: string;
  password: string;
};

export type UserResponseDataType = {
  id: string;
  email: string;
};

export type UserSystemDataType = {
  id: string;
  email: string;
  token: string;
};

export type UpdateUserDataType = {
  name: string;
  phone: string;
};
