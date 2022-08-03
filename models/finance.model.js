import mongoose from "mongoose";

const Schema = mongoose.Schema;

const financeSchema = new Schema(
    {
        userid: { type: String, required: true},
        salary: { type: Number, required: true},
        spendings: { type: Array, "default" : [] },
    }
);

const Finance = mongoose.model("finance", financeSchema);

export default Finance;
