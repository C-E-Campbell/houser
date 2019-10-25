import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import House from "../House/House";
export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			houses: []
		};
	}
	componentDidMount() {
		this.getHouses();
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
				{mappedHouses}
				<Link to='/wizard/step1'>Add New Property</Link>
			</div>
		);
	}
}
