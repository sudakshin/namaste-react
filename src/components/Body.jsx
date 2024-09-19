import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resObj from '../utils/restaurant.json';

const Body = () => {
	// State to hold the filtered restaurant data
	const [filteredRestaurants, setFilteredRestaurants] = useState(resObj);

	return (
		<div className='body'>
			<div className='filter'>
				<button
					className='filter-btn'
					onClick={() => {
						// Filter restaurants with avgRating > 4.5
						const topRatedRestaurants = resObj.filter(
							(res) => res.info.avgRating > 4.5
						);
						console.log(topRatedRestaurants);

						// Update the state with the filtered restaurants
						setFilteredRestaurants(topRatedRestaurants);
					}}
				>
					Top Rated Restaurants
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
