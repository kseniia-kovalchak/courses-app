import './Registration.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

const Registration = () => {
	const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
	};

	const handleRegistrationSubmit = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:4000/register', JSON.stringify(newUser), {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(() => {
				navigate('/login');
			})
			.catch((error) => {
				alert(error.response.data.errors);
			});
	};

	return (
		<div>
			<h1 className='text-center'>Registration</h1>
			<form className='d-flex flex-column justify-content-center align-items-center p-3'>
				<Input
					labelText={'Name'}
					placeholderText={'Enter name'}
					onChange={handleInputChange}
					name={'name'}
				/>
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
				<Button
					buttonText={'Registration'}
					onClick={handleRegistrationSubmit}
				/>
			</form>

			<p className='text-center'>
				If you have an account you can{' '}
				<Link to={{ pathname: '/login' }}>Login</Link>
			</p>
		</div>
	);
};

export default Registration;
