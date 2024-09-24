import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

	const {
		name = 'Unknown Restaurant',
		avgRating = 'N/A',
		cuisines = [],
		sla = {},
		costForTwoMessage = 'N/A',
		cloudinaryImageId = '',
	} = resInfo?.cards?.[2]?.card?.card?.info || {};

	const resList =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
			?.card?.carousel;

	// console.log(resList);

	return resInfo === null ? (
		<Shimmer />
	) : (
		<div className='menu'>
			<h1>{name}</h1>
			<h3>{cuisines.join(',')}</h3>
			<p>{avgRating}</p>
			<p>{sla?.slaString}</p>
			<p>{costForTwoMessage}</p>
			<h2>Menu</h2>
			<ul>
				{resList.map((item) => (
					<li key={item.dish.info.id}>
						{item.dish.info.name} - ₹{item.dish.info.price / 100}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
