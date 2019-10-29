require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const housesCtrl = require("./controller/housesCtrl");
const app = express();
const testCtrl = require("./controller/testCtrl");
const authCtrl = require("./controller/authCtrl");
const auth = require("./middleware/authMiddleware");

massive(process.env.CONNECTION_STRING).then(db => {
	app.set("db", db);
	console.log("db connected");
});

app.use(express.json());

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: false
	})
);

//--------------- End Points
app.use(express.static(`${__dirname}/../build`));

app.get("/api/test", testCtrl.test);

app.get("/houser/houses", auth.userOnly, housesCtrl.getHouses);

app.post("/houser/houses", auth.userOnly, housesCtrl.createHouse);

app.delete("/houser/houses/:id", auth.adminsOnly, housesCtrl.deleteHouse);

app.post("/houser/register", authCtrl.register);

app.post("/houser/login", authCtrl.login);

app.get("/houser/logout", authCtrl.logout);

const path = require("path");
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

//-------------- Run It!
app.listen(process.env.PORT, () => {
	console.log(`server running on ${process.env.PORT}`);
});
