import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StepOne.scss";
import store, {
	UPDATE_NAME,
	UPDATE_ADDRESS,
	UPDATE_CITY,
	UPDATE_STATE,
	UPDATE_ZIP
} from "../../reduxStuff/store";

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
			type: UPDATE_NAME,
			payload: this.state.name
		});
		store.dispatch({
			type: UPDATE_STATE,
			payload: this.state.state
		});
		store.dispatch({
			type: UPDATE_CITY,
			payload: this.state.city
		});
		store.dispatch({
			type: UPDATE_ZIP,
			payload: this.state.zip
		});
		store.dispatch({
			type: UPDATE_ADDRESS,
			payload: this.state.address
		});
	};

	render() {
		return (
			<section className='section-step1'>
				<h2>Add New Listing</h2>
				<div className='step1-list'>
					<label htmlFor='name'>Property Name</label>
					<input
						value={this.state.name}
						type='text'
						onChange={this.handleOnChange}
						id='name'
					/>
					<label htmlFor='address'>Address</label>
					<input
						value={this.state.address}
						type='text'
						onChange={this.handleOnChange}
						id='address'
					/>
					<label value={this.state.name} htmlFor='city'>
						City
					</label>
					<input
						value={this.state.city}
						type='text'
						onChange={this.handleOnChange}
						id='city'
					/>
					<label htmlFor='state'>State (abbr only)</label>
					<input
						value={this.state.state}
						type='text'
						onChange={this.handleOnChange}
						id='state'
					/>
					<label htmlFor='zip'>Zipcode</label>
					<input
						value={this.state.zip}
						type='number'
						onChange={this.handleOnChange}
						id='zip'
					/>
				</div>

				<Link
					className='next-link'
					onClick={this.updateLocation}
					to='/wizard/step2'
				>
					Next
				</Link>
			</section>
		);
	}
}
