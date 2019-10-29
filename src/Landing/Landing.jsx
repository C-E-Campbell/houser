import React, { Component } from "react";
import "./Landing.scss";
import video from "./landing.mp4";
import axios from "axios";
import store, { REGISTER_USER, UPDATE_USER } from "../reduxStuff/store";

export default class Landing extends Component {
	constructor() {
		super();
		const reduxStore = store.getState();
		this.state = {
			email: "",
			password: "",
			store: reduxStore,
			showLog: true
		};
	}

	componentDidMount() {
		const reduxState = store.getState();
		store.subscribe(() => {
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
				if (response.data.email) {
					store.dispatch({
						type: UPDATE_USER,
						payload: response.data
					});
					this.props.history.push("/dashboard");
				} else {
					alert("Register or login with valid account");
				}
			});
		this.setState({ password: "", email: "" });
	};

	register = async () => {
		await axios
			.post("/houser/register", {
				email: this.state.email,
				password: this.state.password
			})
			.then(response => {
				store.dispatch({
					type: REGISTER_USER,
					payload: response.data
				});
			});

		this.props.history.push("/dashboard");
	};

	render() {
		return (
			<div>
				{this.state.showLog ? (
					<div className='log'>
						<i
							onClick={() => {
								this.setState({ showLog: false });
							}}
							className='fas fa-times'
						></i>
						<p>You can login as a USER or ADMIN </p>
						<p>ONLY ADMINS CAN DELETE HOMES! </p>
						<p>
							<span className='red'>ADMIN--</span> email: admin | password:
							admin
						</p>
						<p>
							<span className='red'>USER--</span> email: user | password: user
						</p>
						<p>or register a new account: will be of user status</p>
					</div>
				) : null}
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
								<button onClick={this.login} className='register-btn'>
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='landing'>
					<section className='cta-section'>
						<div className='cta-container'>
							<h1>Welcome to Houser</h1>
							<p>View Homes listed in your area</p>
							<h3>Sign Up Here!</h3>
							<input
								onChange={e => this.setState({ email: e.target.value })}
								placeholder='email'
								type='text'
							/>
							<input
								onChange={e => this.setState({ password: e.target.value })}
								placeholder='password'
								type='password'
							/>
							<button onClick={this.register}>Register</button>
						</div>
					</section>
					<div className='overlay'></div>
					<video className='video' autoPlay loop muted>
						<source src={video} type='video/mp4' />
					</video>
				</div>
			</div>
		);
	}
}
