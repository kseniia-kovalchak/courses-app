import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import * as router from 'react-router';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import axios from 'axios';

import Courses from '../Courses';

let container = null;
const navigate = jest.fn();

beforeEach(() => {
	jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

describe('Testing courses component', () => {
	it('Shows amount of CourseCard equal length of courses array', async () => {
		const user = { name: 'Xenia' };
		let courses = [
			{ id: 1, title: 'title 1' },
			{ id: 2, title: 'title 2' },
			{ id: 3, title: 'title 3' },
		];
		const authors = [];
		const initialState = { user: user, courses: courses, authors: authors };
		const mockStore = configureStore();
		let store = mockStore(initialState);

		jest.spyOn(axios, 'get').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(courses),
			})
		);
		await act(() => {
			render(
				<Provider store={store}>
					<Courses />
				</Provider>,
				container
			);
		});
		expect(container.querySelectorAll('li').length).toBe(courses.length);
	});

	it('Shows empty container if courses array length is 0.', async () => {
		const user = { name: 'Xenia' };
		let courses = [];
		const authors = [];
		const initialState = { user: user, courses: courses, authors: authors };
		const mockStore = configureStore();
		let store = mockStore(initialState);

		jest.spyOn(axios, 'get').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(courses),
			})
		);
		await act(() => {
			render(
				<Provider store={store}>
					<Courses />
				</Provider>,
				container
			);
		});
		expect(container.querySelectorAll('li').length).toBe(0);
	});

	it('CourseForm should be showed after a click on a button "Add new course"', async () => {
		const user = { name: 'Xenia', role: 'admin' };
		let courses = [
			{ id: 1, title: 'title 1' },
			{ id: 2, title: 'title 2' },
			{ id: 3, title: 'title 3' },
		];
		const authors = [];
		const initialState = { user: user, courses: courses, authors: authors };
		const mockStore = configureStore();
		let store = mockStore(initialState);

		//const onChange = jest.fn();

		jest.spyOn(axios, 'get').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(courses),
			})
		);
		await act(() => {
			render(
				<Provider store={store}>
					<Courses />
				</Provider>,
				container
			);
		});

		const button = container.querySelector('.add-button');

		act(() => {
			button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});

		expect(navigate).toHaveBeenCalledTimes(1);
	});
});
