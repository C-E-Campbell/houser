import React, { Component } from "react";
import "./Header.scss";
export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<div className='logo'>
					<i className='fas fa-home'></i>
					<h1>Houser</h1>
				</div>
			</div>
		);
	}
}
