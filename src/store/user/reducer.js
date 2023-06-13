import * as actions from './actionTypes';

const userInitialState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};
export default function userReducer(state = userInitialState, action) {
	switch (action.type) {
		case actions.USER_LOGGED_IN:
			return {
				...state,
				isAuth: action.payload.isAuth,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
				role: action.payload.role,
			};
		case actions.USER_LOGGED_OUT:
			return {
				...state,
				isAuth: action.payload.isAuth,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
				role: action.payload.role,
			};
		case actions.USER_GOT_TOKEN:
			return {
				...state,
				isAuth: action.payload.isAuth,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
				role: action.payload.role,
			};
		default:
			return state;
	}
}
