import React, { Component } from "react";
import "./Footer.scss";
export default class Footer extends Component {
	render() {
		return (
			<section className='footer'>
				<div className='footer-links'>
					<h5>Terms of Service</h5>
					<h5>Privacy</h5>
					<h5>Contact Us</h5>
				</div>
			</section>
		);
	}
}
