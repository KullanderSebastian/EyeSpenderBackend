import User from "../models/user.model.js";
import hashPassword from "./helpers/hashPassword.js";
import comparePasswords from "./helpers/comparePasswords.js";

class UsersController {
    async signup(req, res) {
        try {
            let user = await User.findOne({
                username: req.body.username,
            });

            if (user) {
                return res.status(400).json({
                    error: true,
                    message: "Username is already in use",
                });
            }

            user = req.body;

            const hashedPassword = await hashPassword(req.body.password);

            user.password = hashedPassword;

            const newUser = new User(user);

            await newUser.save();

            return res.status(201).send(user);
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                error: true,
                message: "Cannot sign up",
            });
        }
    }

    async login(req, res) {
        try {
            let user = await User.findOne({ username: req.body.username });

            if (!user) {
                return res.status(404).json({
                    error: true,
                    message: "Account not found",
                });
            }

            const isValid = await comparePasswords(req.body.password, user.password);

            if (!isValid) {
                return res.status(400).json({
                    error: true,
                    message: "Invalid password",
                });
            }

            return res.status(200).send({
                success: true,
                message: "User logged in successfully",
            });
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                error: true,
                message: "Couldn't login. Please try again",
            });
        }
    }
}

export default UsersController;
