import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resObj from '../utils/restaurant.json';

const Body = () => {
	const [filteredRestaurants, setFilteredRestaurants] = useState(resObj);

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
