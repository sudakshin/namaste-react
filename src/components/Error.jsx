import { useRouteError } from 'react-router-dom';

const Error = () => {
	const err = useRouteError();

	return (
		<div className='error'>
			<h1>404 not found</h1>
			<h2>{err.error.message}</h2>
		</div>
	);
};

export default Error;
