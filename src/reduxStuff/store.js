import { createStore } from "redux";

const initialState = {
	name: "",
	address: "",
	state: "",
	zip: 0,
	city: "",
	rent: 0,
	mortgage: 0
};

export const UPDATE_LOCATION = "UPDATE_LOCATION";

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case UPDATE_LOCATION:
			const location = {
				name: payload.name,
				address: payload.address,
				state: payload.state,
				zip: payload.zip,
				city: payload.city
			};
			return { ...state, location };
		default:
			return state;
	}
};

export default createStore(reducer);
