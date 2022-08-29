import Finance from "../models/finance.model.js";

class FinanceController {
    async savePayment(req, res) {
        try {
			let finance = await Finance.findOne({
                userId: req.body.userId,
				month: req.body.month
            });

			if (finance) {
				finance.unplannedSpendings.push({
					title: req.body.title,
					category: req.body.category,
					amount: req.body.amount,
					date: req.body.date
				});

				const newFinance = new Finance(finance);
				await newFinance.save()

				return res.status(201).send(finance);
			} else if (!finance) {
				finance = new Finance();

				finance.userId = req.body.userId;
				finance.month = req.body.month;
				finance.unplannedSpendings = [{
					title: req.body.title,
					category: req.body.category,
					amount: req.body.amount,
					date: req.body.date
				}];

				await finance.save();

				return res.status(200).send(finance);
			}
        } catch (error) {
            console.error(error);

            return res.status(500).json({
                error: true,
                status: 500,
                message: "Cannot save to database",
            });
        }
    }

	async getPayments(req, res) {
		try {
			let finance = await Finance.findOne({
				userId: req.body.userId,
				month: req.body.month
			});

			return res.status(200).send({
				success: true,
				data: finance.unplannedSpendings
			});
		} catch	(error) {
			console.log(error);

			return res.status(500).json({
				error: true,
				status: 500,
				message: error,
			});
		}
	}
}

export default FinanceController;
