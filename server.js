import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
//import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
    console.log("Listening on port: " + port);
});