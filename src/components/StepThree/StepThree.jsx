import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Wizard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mortgage: 0,
			rent: 0
		};
	}

	handleOnChange = event => {
		let { id, value } = event.target;
		this.setState({ [id]: value });
	};

	handleSubmitNewHouse = async () => {
		const { name, address, city, state, zip } = this.state;
		await axios.post("/houser/houses", {
			name: name,
			address: address,
			city: city,
			state: state,
			zip: Number(zip)
		});
		// setTimeout(() => {
		// 	this.props.history.push("/");
		// }, 1000);
		this.props.history.push("/");
	};

	render() {
		return (
			<section>
				<label htmlFor='mortgage'>Mortgage</label>
				<input type='number' onChange={this.handleOnChange} id='mortgage' />
				<label htmlFor='rent'>Rent</label>
				<input type='number' onChange={this.handleOnChange} id='rent' />
				<Link to='/wizard/step2'>Previous</Link>

				<button onClick={this.handleSubmitNewHouse}>Complete</button>
			</section>
		);
	}
}
