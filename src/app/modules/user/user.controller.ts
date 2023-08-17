import { NextFunction, Request, Response } from "express";
import {
  createUserToDB,
  getAdminUsersFromDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";

//These all are Database Query

//1.req and response for creating an user

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

//2 . req and response for getting all users

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};

//3. req and response for finding an specific user by his id(database query) also for filtering this id's specific property

export const getUserByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  console.log("hitted from getuserby ID users", id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};

// 4. req and response for getting all admins by the role property
export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAdminUsersFromDB();
  console.log("hitted from admin users");
  res.status(200).json({
    status: "success",
    data: user,
  });
};

//pattern
//Route --> controller -> service
