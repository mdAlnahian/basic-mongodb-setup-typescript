import { IUser } from "./user.interface";
import User from "./user.model";

//1. fuctionality for create a  new user

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  //completed creating a async function

  const user = new User(payload); // User -> class , user -> instance
  //await here
  await user.save(); //(built in) instance method not custom
  console.log(user.fullName());
  return user;
};

//2. functionality for getting all user

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

//3. functionality for getting an specific user using his id ( findOne and get his specific field or property and value)

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 }); //{ id: payload } ,er porer ta field filtering er jonno
  return user;
};

//4. another one for getting admin users
export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
