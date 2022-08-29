import mongoose from "mongoose";

const Schema = mongoose.Schema;

const financeSchema = new Schema(
	{
		userId: { type: String, required: true},
		month: { type: Number, required: true},
		unplannedSpendings: [{
			title: { type: String, default: null },
			category: { type: String, default: null },
			amount: { type: Number, default: null },
			date : { type : Date}
		}]
	}
);

const Finance = mongoose.model("finance", financeSchema);

export default Finance;
