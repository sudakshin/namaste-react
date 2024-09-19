import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
	return (
		<div className='header'>
			<div className='logo-container'>
				<img
					className='logo'
					src='https://cdn.dribbble.com/users/1635051/screenshots/4291569/media/f1dc908d5e3aa58ae7beed58c623acb6.png?resize=800x600&vertical=center'
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
	);
};

const RestaurantCard = (props) => {
	console.log(props);

	const { resName, cuisine, rating, delTime } = props;
	return (
		<div
			className='res-card'
			style={{ backgroundColor: '#f0f0f0' }}
		>
			<img
				src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jiwjgh4rhaobq5ofgrly'
				alt='Grameen Kulfi'
				className='res-logo'
			/>
			<div className='info'>
				<span className='name'>{resName}</span>
				<span className='cuisine'>{cuisine}</span>
				<span className='rating'>{rating}</span>
				<span className='del-time'>{delTime}</span>
			</div>
		</div>
	);
};

const Body = () => {
	return (
		<div className='body'>
			<div className='search'>Search</div>
			<div className='res-container'>
				<RestaurantCard
					resName='Grameen Kulfi'
					cuisine='Desserts, Ice Cream'
					rating='4.7'
					delTime='25-30 mins'
				/>
				<RestaurantCard
					resName='NIC Ice Creams'
					cuisine='Ice Cream, Desserts'
					rating='4.6'
					delTime='35-40 mins'
				/>
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<div className='app'>
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
