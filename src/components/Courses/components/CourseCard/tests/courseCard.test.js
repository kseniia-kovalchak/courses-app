import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import * as router from 'react-router';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CourseCard from '../CourseCard';

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

describe('Testing course card component', () => {
	const initialState = { user: { name: 'Xenia' } };
	const mockStore = configureStore();
	let store = mockStore(initialState);

	it('Shows title', () => {
		act(() => {
			render(
				<Provider store={store}>
					<CourseCard id={1} title='Title' />
				</Provider>,
				container
			);
		});
		expect(container.textContent).toContain('Title');
	});

	it('Shows description', () => {
		act(() => {
			render(
				<Provider store={store}>
					<CourseCard id={1} description='Description' />
				</Provider>,
				container
			);
		});
		expect(container.textContent).toContain('Description');
	});

	it('Shows duration in the correct format', () => {
		act(() => {
			render(
				<Provider store={store}>
					<CourseCard id={1} duration={32} />
				</Provider>,
				container
			);
		});
		expect(container.textContent).toContain('Duration: 0:32');
	});

	it('Shows authors list', () => {
		act(() => {
			render(
				<Provider store={store}>
					<CourseCard
						id={1}
						authorsList={[
							{ id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36', name: 'Xenia' },
						]}
					/>
				</Provider>,
				container
			);
		});
		expect(container.textContent).toContain('Authors: Xenia');
	});

	it('Shows created date in the correct format', () => {
		act(() => {
			render(
				<Provider store={store}>
					<CourseCard id={1} creationDate={'30/07/2022'} />
				</Provider>,
				container
			);
		});
		expect(container.textContent).toContain('Created: 30.07.2022');
	});
});
