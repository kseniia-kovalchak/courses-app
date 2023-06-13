import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/selectors';

export const PrivateRoute = ({ children }) => {
	const user = useSelector(getUser);
	const isAdmin = user.role === 'admin';

	if (isAdmin === false) {
		return <Navigate to='/login' />;
	}
	return children;
};
