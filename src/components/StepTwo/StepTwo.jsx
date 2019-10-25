import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Wizard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			img: ""
		};
	}

	handleOnChange = event => {
		let { id, value } = event.target;
		this.setState({ [id]: value });
	};

	render() {
		return (
			<section>
				<label htmlFor='zip'>Image URL</label>
				<input type='text' onChange={this.handleOnChange} id='img' />
				<Link to='/wizard/step1'>Previous</Link>
				<Link to='/wizard/step3'>Next</Link>
			</section>
		);
	}
}
