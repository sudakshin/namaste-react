import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
	const [btnName, setBtnName] = useState('Login');

	return (
		<div className='navbar'>
			<div className='header'>
				<div className='logo-container'>
					<img
						className='logo'
						src={LOGO_URL}
						alt='Food App Logo'
					/>
				</div>
				<div className='nav-items'>
					<ul>
						<li>Home</li>
						<li>About Us</li>
						<li>Contact Us</li>
						<li>Cart</li>
						<button
							className='login-btn'
							onClick={() => {
								console.log('Clicked');
								setBtnName(btnName === 'Login' ? 'Logout' : 'Login');
							}}
						>
							{btnName}
						</button>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
