import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import authorsReducer from './authors/reducer';
import coursesReducer from './courses/reducer';
import userReducer from './user/reducer';

const rootReducer = combineReducers({
	authors: authorsReducer,
	courses: coursesReducer,
	user: userReducer,
});

const store = configureStore({
	reducer: rootReducer,
	middleware: [ReduxThunk],
});
export default store;
