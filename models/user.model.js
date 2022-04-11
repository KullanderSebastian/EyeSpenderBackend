import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true},
        hasSetupFinances: { type: Boolean, default: false },
        accessToken: { type: String, default: null },
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAT: "updatedAt",
        },
    }
);

const User = mongoose.model("user", userSchema);

export default User;
