import React, { Component } from "react";
import "./Landing.scss";
import video from "./landing.mp4";
import axios from "axios";
import store from "../reduxStuff/store";
import Header from "../components/Header/Header";
export default class Landing extends Component {
	constructor() {
		super();

		this.state = {};
	}

	componentDidMount() {
		// 	alert(`To Login     email: user   &   password: user`);
		store.subscribe(() => {});
	}

	register = () => {
		axios
			.post("/houser/register", {
				email: this.state.email,
				password: this.state.password
			})
			.then(response => {
				this.setState({ user: response.data });
			});
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
							<input placeholder='email' type='text' />
							<input placeholder='password' type='password' />
							<button>Register</button>
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
