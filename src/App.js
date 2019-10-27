import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Wizard from "./components/Wizard/Wizard";

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path={"/"} component={Landing} />
				<Route path={"/dashboard"} component={Dashboard} />
				<Route path={"/wizard"} component={Wizard} />
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
