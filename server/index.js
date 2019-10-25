require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const app = express();

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

app.get("/api/test", (req, res) => {
	return res.send("server is working");
});

app.listen(process.env.PORT, () => {
	console.log(`server running on ${process.env.PORT}`);
});
