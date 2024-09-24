import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
	const { resData } = props;

	if (!resData || !resData.info) {
		return null; // Return null or a placeholder if data is missing
	}

	const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;

	return (
		<div
			className='res-card'
			style={{ backgroundColor: '#f0f0f0' }}
		>
			<img
				src={CDN_URL + cloudinaryImageId}
				alt={name}
				className='res-logo'
			/>
			<div className='info'>
				<span className='name'>{name}</span>
				<span className='cuisine'>{cuisines.join(', ')}</span>
				<div className='rate-time'>
					<span className='del-time'>{sla.slaString}</span>
					<span className='rating'>{avgRating} ⭐</span>
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
