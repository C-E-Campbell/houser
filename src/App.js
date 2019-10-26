import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wizard from "./components/Wizard/Wizard";

function App() {
	return (
		<div className='App'>
			<Header />

			<Switch>
				<Route exact path={"/"} component={Dashboard} />
				<Route path={"/wizard"} component={Wizard} />
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
