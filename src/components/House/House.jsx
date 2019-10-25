import React from "react";

const House = props => {
	const { address, city, name, state, id, zip, mortgage, rent } = props.details;
	return (
		<section>
			<h3>{name}</h3>
			<h3>{address}</h3>
			<h3>{city}</h3>
			<h3>{state}</h3>
			<h3>{zip}</h3>
			<h3>{mortgage}</h3>
			<h3>{rent}</h3>

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
