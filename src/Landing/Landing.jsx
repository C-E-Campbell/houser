import React, { Component } from "react";
import "./Landing.scss";
import video from "./landing.mp4";
import axios from "axios";
import store, { REGISTER_USER } from "../reduxStuff/store";
import Header from "../components/Header/Header";
export default class Landing extends Component {
	constructor() {
		super();
		const reduxStore = store.getState();
		this.state = {
			email: "",
			password: "",
			store: reduxStore
		};
	}

	componentDidMount() {
		// 	alert(`To Login     email: user   &   password: user`);
		const reduxState = store.getState();
		store.subscribe(() => {
			this.setState({ store: reduxState });
		});
	}

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
				<Header />
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
