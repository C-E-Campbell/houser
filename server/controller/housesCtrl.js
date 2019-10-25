module.exports = {
	getHouses: async (req, res) => {
		const db = req.app.get("db");
		const result = await db.get_all_houses();
		return res.status(200).send(result);
	},
	createHouse: async (req, res) => {
		const db = req.app.get("db");
		const { name, address, city, state, zip } = req.body;
		const result = await db.createHouse([name, address, city, state, zip]);
		return res.status(200).send(result);
	}
};
