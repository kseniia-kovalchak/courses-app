import * as actions from './actionTypes';

export function gotToken(name, email, token, role) {
	return {
		type: actions.USER_GOT_TOKEN,
		payload: {
			name: name,
			email: email,
			token: token,
			isAuth: true,
			role: role,
		},
	};
}

export function loggedIn(name, email, token, role) {
	return {
		type: actions.USER_LOGGED_IN,
		payload: {
			name: name,
			email: email,
			token: token,
			isAuth: true,
			role: role,
		},
	};
}

export function loggedOut() {
	return {
		type: actions.USER_LOGGED_OUT,
		payload: {
			name: '',
			email: '',
			token: '',
			role: '',
			isAuth: false,
		},
	};
}
