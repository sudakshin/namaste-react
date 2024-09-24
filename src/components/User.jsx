import { useState } from 'react';

const User = ({ name }) => {
	let [count, setCount] = useState(0);
	let [count2, setCount2] = useState(1);

	return (
		<div className='user-card'>
			<h2>Name: {name}</h2>
			<h3>Location: New Delhi</h3>
		</div>
	);
};
export default User;
