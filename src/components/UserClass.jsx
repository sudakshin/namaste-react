import { Component } from 'react';

class UserClass extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			count2: 1,
		};
	}

	render() {
		const { name } = this.props;
		const { count, count2 } = this.state;

		return (
			<div className='user-card'>
				<h2>Name: {name}</h2>
				<h3>Location: New Delhi</h3>
				<h3>Count = {count}</h3>
				<button
					onClick={() => {
						this.setState({
							count: ++this.state.count,
						});
						console.log(count);
					}}
				>
					Count Increase
				</button>
				<h3>Count2 = {count2}</h3>
			</div>
		);
	}
}

export default UserClass;
