import React, { Component } from "react";
import "./Header.scss";
import axios from "axios";

import { Link } from "react-router-dom";
import store, { UPDATE_USER } from "../../reduxStuff/store";
export default class Header extends Component {
	constructor(props) {
		const reduxStore = store.getState();
		super(props);
		this.state = {
			store: reduxStore,
			email: "",
			password: ""
		};
	}
	componentDidMount() {
		store.subscribe(() => {
			const reduxState = store.getState();
			this.setState({ store: reduxState });
		});
	}

	login = async () => {
		await axios
			.post("/houser/login", {
				email: this.state.email,
				password: this.state.password
			})
			.then(response => {
				store.dispatch({
					type: UPDATE_USER,
					payload: response.data
				});
			});
		this.setState({ password: "", email: "" });
	};
	render() {
		return (
			<div className='header'>
				<div className='logo'>
					<div className='btn-div'>
						<i className='fas fa-home'></i>
						<h1>Houser</h1>
					</div>
					<div className='login-container'>
						<input
							onChange={e => this.setState({ email: e.target.value })}
							type='text'
							placeholder='email'
						/>
						<input
							onChange={e => this.setState({ password: e.target.value })}
							type='password'
							placeholder='password'
						/>
						<div className='btn-div'>
							<Link
								to='/dashboard'
								onClick={this.login}
								className='register-btn'
							>
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
