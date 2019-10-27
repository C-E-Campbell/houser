import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import store, { CLEAR_REDUX } from "../../reduxStuff/store";
import "./Wizard.scss";
import LogoutHeader from "../LogoutHeader/LogoutHeader";
import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";
export default class Wizard extends Component {
	// constructor() {
	// 	super();
	// }
	clearForm = () => {
		store.dispatch({
			type: CLEAR_REDUX
		});
	};
	render() {
		return (
			<div>
				<LogoutHeader />
				<section>
					<div className='cancel-div'>
						<Link
							className='cancel-btn'
							onClick={this.clearForm}
							to='/dashboard'
						>
							Cancel
						</Link>
					</div>

					<Route path={"/wizard/step1"} component={StepOne} />
					<Route path={"/wizard/step2"} component={StepTwo} />
					<Route path={"/wizard/step3"} component={StepThree} />
				</section>
			</div>
		);
	}
}
