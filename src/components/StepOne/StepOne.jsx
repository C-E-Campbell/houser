import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Wizard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			address: "",
			city: "",
			state: "",
			zip: 0
		};
	}

	handleOnChange = event => {
		let { id, value } = event.target;
		this.setState({ [id]: value });
	};

	render() {
		return (
			<section>
				<label htmlFor='name'>Property Name</label>
				<input type='text' onChange={this.handleOnChange} id='name' />
				<label htmlFor='address'>Address</label>
				<input type='text' onChange={this.handleOnChange} id='address' />
				<label htmlFor='city'>City</label>
				<input type='text' onChange={this.handleOnChange} id='city' />
				<label htmlFor='state'>State</label>
				<input type='text' onChange={this.handleOnChange} id='state' />
				<label htmlFor='zip'>Zipcode</label>
				<input type='number' onChange={this.handleOnChange} id='zip' />

				<Link to='/wizard/step2'>Next</Link>
			</section>
		);
	}
}
