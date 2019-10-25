import { createStore } from "redux";

const initialState = {
	name: "",
	address: "",
	state: "",
	zip: "",
	city: "",
	rent: "",
	mortgage: "",
	img: ""
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIP = "UPDATE_ZIP";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_IMG = "UPDATE_IMG";
export const UPDATE_RENT = "UPDATE_RENT";
export const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
export const UPDATE_REDUX = "UPDATE_REDUX";
export const CLEAR_REDUX = "CLEAR_REDUX";

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case UPDATE_NAME:
			return { ...state, name: payload };
		case UPDATE_STATE:
			return { ...state, state: payload };
		case UPDATE_CITY:
			return { ...state, city: payload };
		case UPDATE_ZIP:
			return { ...state, zip: payload };
		case UPDATE_ADDRESS:
			return { ...state, address: payload };
		case UPDATE_IMG:
			return { ...state, img: payload };
		case UPDATE_RENT:
			return { ...state, rent: payload };
		case UPDATE_MORTGAGE:
			return { ...state, mortgage: payload };
		case CLEAR_REDUX:
			return {
				...state,
				name: "",
				address: "",
				state: "",
				zip: "",
				city: "",
				mortgage: "",
				rent: ""
			};
		default:
			return state;
	}
};

export default createStore(reducer);
