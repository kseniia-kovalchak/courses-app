import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import * as router from 'react-router';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Header from '../Header.jsx';

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

describe('Testing header component', () => {
	const initialState = { user: { name: 'Xenia' } };
	const mockStore = configureStore();
	let store;

	it('Shows user name correctly', () => {
		store = mockStore(initialState);

		act(() => {
			render(
				<Provider store={store}>
					<Header />
				</Provider>,
				container
			);
		});
		expect(container.textContent).toBe('Xenia');
	});
	it('Shows logo', () => {
		store = mockStore(initialState);

		act(() => {
			render(
				<Provider store={store}>
					<Header />
				</Provider>,
				container
			);
		});
		expect(container.querySelector('img').src).toBe(
			'data:image/png;base64,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'
		);
	});
});
