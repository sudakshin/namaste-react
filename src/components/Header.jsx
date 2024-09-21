import { LOGO_URL } from '../utils/constants';

const Header = () => {
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
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
