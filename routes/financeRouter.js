import express from "express";
import FinanceController from "../controllers/FinanceController.js";
const financeRouter = express.Router();

import cleanBody from "../middlewares/cleanBody.js";
import validateToken from "../middlewares/validateToken.js";

const finance = new FinanceController();

financeRouter.post("/savepayment", cleanBody, finance.savePayment);

financeRouter.patch("/getpayments", finance.getPayments);

export default financeRouter;
