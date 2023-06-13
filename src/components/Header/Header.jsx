import './header.css';

import Logo from './Logo/Logo';
import Button from '../../common/Button/Button';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../store/selectors';
import { logoutThunk } from './../../store/user/thunk';

function Header() {
	const user = useSelector(getUser);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logoutThunk());
		localStorage.removeItem('token');

		navigate('/login');
	};

	return (
		<div className='row border border-danger'>
			<div className='col-10'>
				<Logo />
			</div>
			<div className='col-2'>
				<span>{user.name}</span>
				{user.isAuth && <Button buttonText={'Logout'} onClick={handleLogout} />}
			</div>
		</div>
	);
}

export default Header;
