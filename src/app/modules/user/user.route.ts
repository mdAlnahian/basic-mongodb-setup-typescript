import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserByID,
  getUsers,
} from "./user.controller";

const router = express.Router();

/* 

*/

router.get("/", getUsers);
router.get("/admins", getAdminUsers); // note amar json file a kono datar role ami admin di nai age , student disilam tai route a admin show korleo ami asole student der find kortesi , role admin thakle similarly oitao ber kora possible. joss🎇
router.get("/:id", getUserByID); // Issue solved
router.post("/create-user", createUser);

export default router;
