import React, { Component } from "react";
import "./LogoutHeader.scss";
import store, { LOGOUT_USER } from "../../reduxStuff/store";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Header extends Component {
	constructor(props) {
		super(props);
		const reduxStore = store.getState();
		this.state = {
			store: reduxStore
		};
	}

	logout = async () => {
		await axios.get("/houser/logout").then(response => {
			store.dispatch({
				type: LOGOUT_USER,
				payload: response.data
			});
		});
	};

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
							<Link to='/' onClick={this.logout} className='register-btn'>
								Logout
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
