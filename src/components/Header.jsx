import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

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
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/contact'>Contact Us</Link>
						</li>
						<li>
							<Link to='/cart'>Cart</Link>
						</li>
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
