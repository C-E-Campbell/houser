import React, { Component } from "react";
import "./LogoutHeader.scss";
import store from "../../reduxStuff/store";
import { Link } from "react-router-dom";
export default class Header extends Component {
	constructor() {
		super();
		const reduxStore = store.getState();
		this.state = {
			store: reduxStore
		};
	}

	componentDidMount() {
		store.subscribe(() => {
			const reduxState = store.getState();
			this.setState({ store: reduxState });
		});
	}
	render() {
		return (
			<div className='header'>
				<div className='logo'>
					<div className='btn-div'>
						<i className='fas fa-home'></i>
						<h1>Houser</h1>
					</div>
					<div className='login-container'>
						<h2>{`Welcome, ${this.state.store.user.email}`}</h2>
						<div className='btn-div'>
							<Link className='register-btn' to='/'>
								Logout
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
