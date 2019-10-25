import { createStore } from "redux";

const initialState = {
	name: "",
	address: "",
	state: "",
	zip: 0,
	city: "",
	rent: 0,
	mortgage: 0,
	img: ""
};

export const UPDATE_LOCATION = "UPDATE_LOCATION";
export const UPDATE_IMG = "UPDATE_IMG";
export const UPDATE_RENT = "UPDATE_RENT";
export const UPDATE_REDUX = "UPDATE_REDUX";
export const CLEAR_REDUX = "CLEAR_REDUX";

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
		case UPDATE_IMG:
			const { img } = payload;
			return { ...state, img };
		case UPDATE_RENT:
			const { mortgage, rent } = payload;
			return { ...state, mortgage, rent };
		case CLEAR_REDUX:
			return {
				...this.state,
				name: "",
				address: "",
				state: "",
				zip: 0,
				city: "",
				rent: 0,
				mortgage: 0,
				img: ""
			};
		default:
			return state;
	}
};

export default createStore(reducer);
