import { useState } from 'react';

const User = ({ name }) => {
	let [count, setCount] = useState(0);
	let [count2, setCount2] = useState(1);

	return (
		<div className='user-card'>
			<h2>Name: {name}</h2>
			<h3>Location: New Delhi</h3>
			<h3>Count = {count}</h3>
			<button
				onClick={() => {
					setCount(++count);
				}}
			>
				Count Increase
			</button>
			<h3
				onClick={() => {
					setCount2(count2++);
				}}
			>
				Count2 = {count2}
			</h3>
		</div>
	);
};
export default User;
