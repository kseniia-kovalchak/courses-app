import * as actions from './actionTypes';

export function courseAdded({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
}) {
	return {
		type: actions.COURSE_ADDED,
		payload: {
			id: id,
			title: title,
			description: description,
			creationDate: creationDate,
			duration: duration,
			authors: authors,
		},
	};
}

export function courseUpdated(
	id,
	title,
	description,
	creationDate,
	duration,
	authors
) {
	return {
		type: actions.COURSE_UPDATED,
		payload: {
			id: id,
			title: title,
			description: description,
			creationDate: creationDate,
			duration: duration,
			authors: authors,
		},
	};
}

export function courseDeleted(id) {
	return {
		type: actions.COURSE_DELETED,
		payload: {
			id: id,
		},
	};
}

export function coursesReceived(coursesList) {
	return {
		type: actions.COURSES_RECEIVED,
		payload: {
			coursesList: coursesList,
		},
	};
}
