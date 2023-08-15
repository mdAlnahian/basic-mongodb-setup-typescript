import User from "./user.model";

export const createUserToDB = async () => {
  //completed creating a async function

  const user = new User({
    id: "100",
    role: "student",
    password: "passworddiyekiKorbajanainan",
    name: {
      firstName: "Ami",
      middleName: "Al",
      lastName: "Nahian asolei",
    },
    dateOfBirth: "12/12/12",
    gender: "male",
    email: "muhamdsfsdafsdmedalnahian@gmail.com",
    contactNo: "01820124414",
    emargencyContact: "01824423698",
    presentAddress: "Oman ,biman ,bidesh",
    permanentAddress: "Oman ,biman ,bideshdsfadf",
  });
  //await here
  await user.save();
  return user;
};
