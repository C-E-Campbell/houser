import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";
export default class Wizard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<Link to='/'>Cancel</Link>
				<Route path={"/wizard/step1"} component={StepOne} />
				<Route path={"/wizard/step2"} component={StepTwo} />
				<Route path={"/wizard/step3"} component={StepThree} />
			</section>
		);
	}
}
