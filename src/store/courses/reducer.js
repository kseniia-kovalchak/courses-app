import * as actions from './actionTypes';

const coursesInitialState = [];

export default function coursesReducer(state = coursesInitialState, action) {
	switch (action.type) {
		case actions.COURSE_ADDED:
			return [
				...state,
				{
					id: action.payload.id,
					title: action.payload.title,
					description: action.payload.description,
					creationDate: action.payload.creationDate,
					duration: action.payload.duration,
					authors: action.payload.authors,
				},
			];

		case actions.COURSE_UPDATED: {
			return state.map((course) => {
				if (course.id === action.payload.id) {
					return { ...action.payload };
				}
				return course;
			});
		}

		case actions.COURSE_DELETED:
			return state.filter((course) => course.id !== action.payload.id);

		case actions.COURSES_RECEIVED:
			return [...action.payload.coursesList];

		default:
			return state;
	}
}
