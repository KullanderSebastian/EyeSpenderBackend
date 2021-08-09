import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import router from "./routes/router.js";
import usersRouter from "./routes/usersRouter.js";
import mongoose from "mongoose";

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }).then(() => {
        console.log("Database connection established");
    })
    .catch((err) => {
        console.log(`ERROR: ${err}`);
    });

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use("/users", usersRouter);

app.listen(port, () => {
    console.log("Listening on port: " + port);
});
