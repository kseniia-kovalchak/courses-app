import * as actions from './actionTypes';

export function authorAdded(id, name) {
	return {
		type: actions.AUTHOR_ADDED,
		payload: {
			id: id,
			name: name,
		},
	};
}

export function authorsReceived(authorsList) {
	return {
		type: actions.AUTHORS_RECEIVED,
		payload: {
			authorsList: authorsList,
		},
	};
}
