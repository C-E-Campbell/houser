import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_RENT } from "../../reduxStuff/store";
import axios from "axios";
export default class Wizard extends Component {
	constructor(props) {
		const reduxStore = store.getState();
		super(props);
		this.state = {
			mortgage: reduxStore.mortgage,
			rent: reduxStore.rent
		};
	}
	componentDidMount() {
		store.subscribe(() => {
			const reduxState = store.getState();
			this.setState({
				mortgage: reduxState.mortgage,
				rent: reduxState.rent
			});
		});
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

	updateRent = () => {
		store.dispatch({
			type: UPDATE_RENT,
			payload: { ...this.state }
		});
	};

	render() {
		return (
			<section>
				<label htmlFor='mortgage'>Mortgage</label>
				<input type='number' onChange={this.handleOnChange} id='mortgage' />
				<label htmlFor='rent'>Rent</label>
				<input type='number' onChange={this.handleOnChange} id='rent' />
				<Link onClick={this.updateRent} to='/wizard/step2'>
					Previous
				</Link>

				<button onClick={this.handleSubmitNewHouse}>Complete</button>
			</section>
		);
	}
}
