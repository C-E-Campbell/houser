import React from "react";

const House = props => {
	const { address, city, mortagage, name, rent, state } = props.details;
	return (
		<section>
			<h3>{name}</h3>
			<h3>{address}</h3>
			<h3>{city}</h3>
			<h3>{state}</h3>
			<h3>{mortagage}</h3>
			<h3>{rent}</h3>
			<button>Delete</button>
		</section>
	);
};

export default House;
