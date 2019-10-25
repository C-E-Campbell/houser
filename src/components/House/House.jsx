import React from "react";
import "./House.scss";
const House = props => {
	const {
		address,
		city,
		name,
		img,
		state,
		id,
		zip,
		mortgage,
		rent
	} = props.details;
	return (
		<section className='house-section'>
			<section className='img-container'>
				<img src={img} alt='house' />
			</section>

			<section>
				<h3>{`Property Name: ${name}`}</h3>
				<h3>{`Address: ${address}`}</h3>
				<h3>{`City: ${city}`}</h3>
				<h3>{`State: ${state}`}</h3>
				<h3>{`Zip: ${zip}`}</h3>
			</section>
			<section>
				<h3>{`Mortgage: ${mortgage}`}</h3>
				<h3>{`Rent: ${rent}`}</h3>
			</section>
			<i
				onClick={e => {
					props.delete(id);
				}}
				className='fas fa-times delete'
			></i>
			{/* <button>Delete</button> */}
		</section>
	);
};

export default House;
