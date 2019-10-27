import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StepTwo.scss";
import store, { UPDATE_IMG } from "../../reduxStuff/store";

export default class Wizard extends Component {
	constructor(props) {
		const reduxState = store.getState();
		super(props);
		this.state = {
			img: reduxState.img
		};
	}

	componentDidMount() {
		store.subscribe(() => {
			const reduxState = store.getState();
			this.setState({
				img: reduxState.img
			});
		});
	}

	handleOnChange = event => {
		let { id, value } = event.target;
		this.setState({ [id]: value });
	};

	updateImg = () => {
		store.dispatch({
			type: UPDATE_IMG,
			payload: this.state.img
		});
	};

	render() {
		return (
			<div className='step-container'>
				<section className='section-step2'>
					<h2>Add New Listing</h2>
					<div className='step2-list'>
						<label htmlFor='zip'>Image URL</label>
						<input
							value={this.state.img}
							type='text'
							onChange={this.handleOnChange}
							id='img'
						/>
					</div>
					<Link
						className='prev-link'
						onClick={this.updateImg}
						to='/wizard/step1'
					>
						Previous
					</Link>
					<Link
						className='next-link'
						onClick={this.updateImg}
						to='/wizard/step3'
					>
						Next
					</Link>
				</section>
			</div>
		);
	}
}
