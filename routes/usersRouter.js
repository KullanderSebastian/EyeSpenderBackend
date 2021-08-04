import express from "express";
import UsersController from "../controllers/UsersController.js";
const usersRouter = express.Router();

import cleanBody from "../middlewares/cleanBody.js";

const users = new UsersController();

usersRouter.post("/signup", cleanBody, users.signup);

usersRouter.post("/login", cleanBody, users.login);

export default usersRouter;
