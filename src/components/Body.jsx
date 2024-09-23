import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [searchText, setSearchText] = useState('');

	console.log('Body Rendered');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6527387&lng=77.1666702&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
		);

		// 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.651027&lng=77.1562196&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'

		const jsonData = await data.json();

		const rests =
			jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;

		setFilteredRestaurants(rests);
		setListOfRestaurants(rests);
	};

	if (filteredRestaurants.length === 0) {
		return <Shimmer />;
	}

	return (
		<div className='body'>
			<div className='filter'>
				<div className='search'>
					<input
						type='text'
						className='search-box'
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
							if (e.target.value === '') {
								setFilteredRestaurants(listOfRestaurants);
							}
						}}
					/>
					<button
						onClick={() => {
							console.log(searchText);
							if (searchText === '') {
								// If search text is empty, show all restaurants
								setFilteredRestaurants(listOfRestaurants);
							} else {
								// Apply the search filter
								const searched = listOfRestaurants.filter((res) =>
									res.info.name.toLowerCase().includes(searchText.toLowerCase())
								);
								setFilteredRestaurants(searched);
							}
						}}
					>
						Search
					</button>
				</div>
				<button
					className='filter-btn'
					onClick={() => {
						const topRatedRestaurants = filteredRestaurants.filter(
							(res) => res.info.avgRating >= 4.3
						);
						setFilteredRestaurants(topRatedRestaurants);
					}}
				>
					Top Rated Restaurants
				</button>

				<button
					className='filter-btn'
					onClick={() => {
						console.log('Resetting filter');
						setFilteredRestaurants(listOfRestaurants);
					}}
				>
					Reset Filter
				</button>
			</div>

			<div className='res-container'>
				{filteredRestaurants.map((restaurant) => (
					<Link
						key={restaurant.info.id}
						to={'/restaurants/' + restaurant.info.id}
					>
						<RestaurantCard resData={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
