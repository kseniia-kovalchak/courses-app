import axios from 'axios';

export function getCurrentUser() {
	const promise = axios.get('http://localhost:4000/users/me', {
		headers: {
			Authorization: localStorage.getItem('token'),
			'Content-Type': 'application/json',
		},
	});

	return promise;
}

export function login(newUser) {
	const promise = axios.post(
		'http://localhost:4000/login',
		JSON.stringify(newUser),
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

	return promise;
}

export function logout() {
	const promise = axios.delete(`http://localhost:4000/logout`, {
		headers: {
			Authorization: localStorage.getItem('token'),
			'Content-Type': 'application/json',
		},
	});

	const dataPromise = promise.then((response) => response);

	return dataPromise;
}

export function getAuthorsList() {
	const promise = axios.get('http://localhost:4000/authors/all');

	const dataPromise = promise.then((response) => response.data);

	return dataPromise;
}

export function getCoursesList() {
	const promise = axios.get('http://localhost:4000/courses/all');

	const dataPromise = promise.then((response) => response.data);

	return dataPromise;
}

export function addCourse(newCourse) {
	const promise = axios.post(
		'http://localhost:4000/courses/add',
		{
			title: newCourse.title,
			description: newCourse.description,
			duration: +newCourse.duration,
			authors: newCourse.authors,
		},
		{
			headers: {
				Authorization: localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		}
	);

	const dataPromise = promise.then((response) => response.data);

	return dataPromise;
}

export function updateCourse(id, courseData) {
	const promise = axios.put(
		`http://localhost:4000/courses/${id}`,
		{
			title: courseData.title,
			description: courseData.description,
			duration: +courseData.duration,
			authors: courseData.authors,
		},
		{
			headers: {
				Authorization: localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		}
	);

	const dataPromise = promise.then((response) => response.data);

	return dataPromise;
}

export function deleteCourse(id) {
	const promise = axios.delete(`http://localhost:4000/courses/${id}`, {
		headers: {
			Authorization: localStorage.getItem('token'),
			'Content-Type': 'application/json',
		},
	});

	const dataPromise = promise.then((response) => response.data);

	return dataPromise;
}

export function addAuthor(newAuthor) {
	const promise = axios.post(
		'http://localhost:4000/authors/add',
		{
			name: newAuthor.name,
		},
		{
			headers: {
				Authorization: localStorage.getItem('token'),
				'Content-Type': 'application/json',
			},
		}
	);

	const dataPromise = promise.then((response) => response.data);

	return dataPromise;
}

export function getCourseById(id) {
	const promise = axios.get(`http://localhost:4000/courses/${id}`);

	const dataPromise = promise.then((response) => response.data);

	return dataPromise;
}
