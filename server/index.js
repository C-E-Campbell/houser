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

app.post("/houser/register", async (req, res) => {
	const { email, password } = req.body;
	const db = req.app.get("db");
	const result = await db.check_if_user_exists([email]);
	const exitingUser = result[0];
	if (exitingUser) {
		return res
			.status(409)
			.send("This user already exists. Sign in with your account.");
	} else {
		var hash = bcrypt.hashSync(password, 10);
		const registeredUser = await db.create_user(email, hash);
		const user = registeredUser[0];
		req.session.user = {
			email: user.email,
			id: user.id
		};

		return res.status(201).send(req.session.user);
	}
});

app.post("/houser/login", async (req, res) => {
	let { email, password } = req.body;
	let db = req.app.get("db");
	let userFound = await db.check_if_user_exists(email);
	if (!userFound[0]) {
		return res.status(200).send("Incorrect email. Please try again.");
	}
	let result = bcrypt.compareSync(password, userFound[0].user_password);
	if (result) {
		req.session.user = { id: userFound[0].id, email: userFound[0].email };
		res.status(200).send(req.session.user);
	} else {
		return res.status(401).send("Incorrect email/password");
	}
});

app.get("/houser/logout", (req, res) => {
	req.session.destroy();
	res.sendStatus(200);
});
//-------------- Run It!
app.listen(process.env.PORT, () => {
	console.log(`server running on ${process.env.PORT}`);
});
