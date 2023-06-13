import { getCurrentUser, logout } from '../../services';
import { gotToken, loggedOut } from './actionCreators';

export const getCurrentUserThunk = () => async (dispatch) => {
	getCurrentUser().then((res) => {
		dispatch(
			gotToken(
				res.data.result.name,
				res.data.result.email,
				localStorage.getItem('token'),
				res.data.result.role
			)
		);
	});
};

export const logoutThunk = () => async (dispatch) => {
	logout()
		.then(() => {
			dispatch(loggedOut());
		})
		.catch((err) => {
			console.log(err);
		});
};
