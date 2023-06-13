import * as actions from './actionTypes';

const authorsInitialState = [];

export default function authorsReducer(state = authorsInitialState, action) {
	switch (action.type) {
		case actions.AUTHOR_ADDED:
			return [
				...state,
				{
					id: action.payload.id,
					name: action.payload.name,
				},
			];

		case actions.AUTHOR_UPDATED: {
			return state.map((author) => {
				if (author.id === action.payload.id) {
					return { ...action.payload };
				}
				return author;
			});
		}

		case actions.AUTHORS_RECEIVED:
			return [...action.payload.authorsList];
		default:
			return state;
	}
}
