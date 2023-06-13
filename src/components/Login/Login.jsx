import './Login.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { login } from '../../services';
import { getCurrentUserThunk } from '../../store/user/thunk';
import { getUser } from '../../store/selectors';

const Login = () => {
	const user = useSelector(getUser);

	const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
	const [isLoading, setIsLoading] = useState(() =>
		localStorage.getItem('token') ? true : false
	);

	const navigate = useNavigate();

	const dispatch = useDispatch();

	useEffect(() => {
		if (user.isAuth) {
			navigate('/courses');
		}
	}, [user]);

	const handleInputChange = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();

		setIsLoading(true);
		login(newUser)
			.then((response) => {
				const token = response.data.result;
				localStorage.setItem('token', token);

				dispatch(getCurrentUserThunk());
			})

			.catch(() => {
				alert('user does not exist');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	if (isLoading) return <div></div>;
	else
		return (
			<div>
				<h1 className='text-center'>Login</h1>
				<form
					className='d-flex flex-column justify-content-center align-items-center p-3'
					onSubmit={handleLoginSubmit}
				>
					<Input
						labelText={'Email'}
						placeholderText={'Enter email'}
						onChange={handleInputChange}
						type={'email'}
						name={'email'}
					/>
					<Input
						labelText={'Password'}
						placeholderText={'Enter password'}
						onChange={handleInputChange}
						type={'password'}
						name={'password'}
					/>
					<Button buttonText={'Login'} />
				</form>

				<p className='text-center'>
					If you not have an account you can{' '}
					<Link to={{ pathname: '/registration' }}>Registration</Link>
				</p>
			</div>
		);
};

export default Login;
