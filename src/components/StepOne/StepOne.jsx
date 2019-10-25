import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_LOCATION } from "../../reduxStuff/store";
export default class Wizard extends Component {
	constructor(props) {
		super(props);
		const reduxState = store.getState();
		this.state = {
			name: reduxState.name,
			address: reduxState.address,
			city: reduxState.city,
			state: reduxState.state,
			zip: reduxState.zip
		};
	}
	componentDidMount() {
		store.subscribe(() => {
			const reduxState = store.getState();
			this.setState({
				name: reduxState.name,
				address: reduxState.address,
				city: reduxState.city,
				state: reduxState.state,
				zip: reduxState.zip
			});
		});
	}
	handleOnChange = event => {
		let { id, value } = event.target;
		this.setState({ [id]: value });
	};

	updateLocation = () => {
		store.dispatch({
			type: UPDATE_LOCATION,
			payload: { ...this.state }
		});
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

				<Link onClick={this.updateLocation} to='/wizard/step2'>
					Next
				</Link>
			</section>
		);
	}
}
