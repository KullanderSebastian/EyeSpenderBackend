import express from "express";
import UsersController from "../controllers/UsersController.js";
const usersRouter = express.Router();

import cleanBody from "../middlewares/cleanBody.js";
import validateToken from "../middlewares/validateToken.js";

const users = new UsersController();

usersRouter.post("/signup", cleanBody, users.signup);

usersRouter.patch("/login", cleanBody, users.login);

usersRouter.patch("/logout", validateToken, users.logout);

usersRouter.post("/checktoken", validateToken, users.checkToken);

usersRouter.patch("/getuserid", users.getUserId);

usersRouter.patch("/getusersetupstatus", users.getUserSetupStatus);

usersRouter.post("/updateusersetupstatus", users.updateUserSetupStatus);

usersRouter.post("/changepassword", users.changePassword);

export default usersRouter;
