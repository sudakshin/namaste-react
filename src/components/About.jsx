import User from './User';
import UserClass from './UserClass';

const About = () => {
	return (
		<div className='about'>
			<h1>About</h1>
			{/* <User name={'Sudakshin (fxnl component)'} /> */}
			<UserClass name={'Sudakshin (class based component)'} />
		</div>
	);
};
export default About;
