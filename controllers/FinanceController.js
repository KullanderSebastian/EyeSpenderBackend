import Finance from "../models/finance.model.js";

class FinanceController {
    async saveFinances(req, res) {
        try {
            let finance = req.body;

            const newFinance = new Finance(finance);

            await newFinance.save();

            return res.status(201).send(finance);
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                error: true,
                status: 500,
                message: "Cannot save to database",
            });
        }
    }

    async getFinances(req, res) {
        try {
            let finance = await Finance.findOne({
                userid: req.body.userid,
            });

            return res.status(200).send({
                success: true,
                data: finance
            });
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                error: true,
                message: error,
            });
        }
    }
}

export default FinanceController;
