import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// model for custom methods
// type UserModel = Model<IUser, {}, IUserMethods>; //no longer needed as we are using both methods and statics from mongoose docs

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emargencyContact: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

// for static
userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({ role: "student" });
  return admins; // sir eita likhe nai , error khaile check korish
});

// for instance custom method

userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

// creating a model
// model<Interface name>("variable name" , schemaName)
const User = model<IUser, UserModel>("User", userSchema);

export default User;

// instance methods --> instance er methods
// class -> instance + methods => instance methods
