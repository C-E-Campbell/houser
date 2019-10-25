import React from "react";

const House = props => {
	const {
		address,
		city,
		mortagage,
		name,
		rent,
		state,
		id,
		zip
	} = props.details;
	return (
		<section>
			<h3>{name}</h3>
			<h3>{address}</h3>
			<h3>{city}</h3>
			<h3>{state}</h3>
			<h3>{zip}</h3>

			<button
				onClick={e => {
					props.delete(id);
				}}
			>
				Delete
			</button>
		</section>
	);
};

export default House;
