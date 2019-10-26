module.exports = {
	getHouses: async (req, res) => {
		const db = req.app.get("db");
		const result = await db.get_all_houses();
		return res.status(200).send(result);
	},
	createHouse: async (req, res) => {
		const db = req.app.get("db");
		const { name, address, city, state, zip, img, mortgage, rent } = req.body;
		const result = await db.create_new_house([
			name,
			address,
			city,
			state,
			zip,
			img,
			mortgage,
			rent
		]);
		return res.status(200).send("New house inserted");
	},
	deleteHouse: async (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		const result = await db.delete_house([id]);
		return res.status(200).send(result);
	}
};
