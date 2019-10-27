import React, { Component } from "react";
import "./LogoutHeader.scss";
import { Link } from "react-router-dom";
export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<div className='logo'>
					<div className='btn-div'>
						<i className='fas fa-home'></i>
						<h1>Houser</h1>
					</div>
					<div className='login-container'>
						<div className='btn-div'>
							<Link className='register-btn' to='/'>
								Logout
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
