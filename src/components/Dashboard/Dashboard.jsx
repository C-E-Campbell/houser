import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import store, { LOGOUT_USER } from "../../reduxStuff/store";
import axios from "axios";
import House from "../House/House";
import LogoutHeader from "../LogoutHeader/LogoutHeader";
export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		const reduxStore = store.getState();
		this.state = {
			houses: [],
			store: reduxStore
		};
	}

	componentDidMount() {
		this.getHouses();
		store.subscribe(() => {
			const reduxState = store.getState();
			this.setState({ store: reduxState });
		});
	}

	getHouses = () => {
		axios.get("/houser/houses").then(response => {
			this.setState({ houses: response.data });
		});
	};

	deleteHouse = id => {
		axios.delete(`/houser/houses/${id}`).then(response => {
			this.setState({ houses: response.data });
		});
	};

	render() {
		const { houses } = this.state;
		const mappedHouses = houses.map(house => {
			return <House key={house.id} details={house} delete={this.deleteHouse} />;
		});

		return (
			<div>
				<LogoutHeader />
				<div className='main'>
					<div className='dashboard'>
						<h1>Dashboard</h1>
						<Link to='/wizard/step1'>Add New Property</Link>
					</div>
					<hr />
					<section className='main-section'>
						<h2>Home Listings</h2>
						{mappedHouses}
					</section>
				</div>
			</div>
		);
	}
}
