require("dotenv").config();
const express = require("express");
const massive = require("massive");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const housesCtrl = require("./controller/housesCtrl");
const app = express();
//const authCtrl = require("./controllers/authController");
massive(process.env.CONNECTION_STRING).then(db => {
	app.set("db", db);
	console.log("db connected");
});
//const auth = require("./middleware/authMiddleware");
app.use(express.json());

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: false
	})
);

//--------------- End Points

app.get("/api/test", (req, res) => {
	return res.send("server is working");
});

app.get("/houser/houses", housesCtrl.getHouses);

app.post("/houser/houses", housesCtrl.createHouse);

app.delete("/houser/houses/:id", housesCtrl.deleteHouse);

app.post("/houser/register", async (req, res, next) => {
	const { email, password } = req.body;
	const db = req.app.get("db");
	const result = await db.check_if_user_exists([email]);
	if (result[0]) {
		return res.status(200).send("Account exist please login");
	}
	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);
	let newUser = await db.create_user([email, hash]);
	req.session.user = {
		id: newUser[0].id,
		email: newUser[0].email
	};
	return res.status(200).send(req.session.user);
});

app.post("/houser/login", async (req, res, next) => {
	const { email, password } = req.body;
	const db = req.app.get("db");
	const result = await db.check_if_user_exists([email]);
	if (!result[0]) {
		return res.status(200).send("The email / password was invalid, try again");
	}
	let isReal = bcrypt.compareSync(password, result[0].user_password);
	if (isReal) {
		req.session.user = {
			id: newUser[0].id,
			email: newUser[0].email
		};
		return res.status(200).send(req.session.user);
	} else {
		return res.status(401).send("Incorrect email or password");
	}
});
//-------------- Run It!
app.listen(process.env.PORT, () => {
	console.log(`server running on ${process.env.PORT}`);
});
