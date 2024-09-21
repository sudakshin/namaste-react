import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const Body = () => {
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.651027&lng=77.1562196&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
		);

		const jsonData = await data.json();

		console.log(jsonData);
		setFilteredRestaurants(
			jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	if()

	return (
		<div className='body'>
			<div className='filter'>
				<button
					className='filter-btn'
					onClick={() => {
						const topRatedRestaurants = resObj.filter(
							(res) => res.info.avgRating > 4.5
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
						setFilteredRestaurants(resObj);
					}}
				>
					Reset Filter
				</button>
			</div>

			<div className='res-container'>
				{filteredRestaurants.map((restaurant) => (
					<RestaurantCard
						key={restaurant.info.id}
						resData={restaurant}
					/>
				))}
			</div>
		</div>
	);
};

export default Body;
