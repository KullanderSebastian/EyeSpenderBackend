import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true},
		accessToken: { type: String, default: null},
		hasSetupFinances: { type: Boolean, default: false },
		salary: { type: Number, default: null },
		savingsGoal: { type: Number, default: null },
		plannedSpendings: [{
			title: { type: String, default: null },
			category: { type: String, default: null },
			amount: { type: Number, default: null}
		}]
	},
	{
		timestamps: {
			createdAt: "createdAt",
			updatedAT: "updatedAT"
		},
	}
);

const User = mongoose.model("user", userSchema);

export default User;
