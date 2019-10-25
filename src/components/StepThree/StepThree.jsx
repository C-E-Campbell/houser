import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {
	UPDATE_RENT,
	UPDATE_MORTGAGE,
	CLEAR_REDUX
} from "../../reduxStuff/store";
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
		const { name, address, city, state, zip, img } = store.getState();
		const { mortgage, rent } = this.state;
		await axios.post("/houser/houses", {
			name,
			address,
			city,
			state,
			zip: Number(zip),
			img,
			mortgage: Number(mortgage),
			rent: Number(rent)
		});
		store.dispatch({
			type: CLEAR_REDUX
		});
		this.props.history.push("/");
	};

	updateRent = () => {
		store.dispatch({
			type: UPDATE_RENT,
			payload: this.state.rent
		});
		store.dispatch({
			type: UPDATE_MORTGAGE,
			payload: this.state.mortgage
		});
	};

	render() {
		return (
			<section>
				<label htmlFor='mortgage'>Mortgage</label>
				<input
					value={this.state.mortgage}
					type='number'
					onChange={this.handleOnChange}
					id='mortgage'
				/>
				<label htmlFor='rent'>Rent</label>
				<input
					value={this.state.rent}
					type='number'
					onChange={this.handleOnChange}
					id='rent'
				/>
				<Link onClick={this.updateRent} to='/wizard/step2'>
					Previous
				</Link>

				<button onClick={this.handleSubmitNewHouse}>Complete</button>
			</section>
		);
	}
}
