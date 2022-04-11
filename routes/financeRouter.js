import express from "express";
import FinanceController from "../controllers/FinanceController.js";
const financeRouter = express.Router();

import cleanBody from "../middlewares/cleanBody.js";
import validateToken from "../middlewares/validateToken.js";

const finance = new FinanceController();

financeRouter.post("/savefinances", cleanBody, finance.saveFinances);

financeRouter.patch("/getfinances", cleanBody, finance.getFinances);

export default financeRouter;
