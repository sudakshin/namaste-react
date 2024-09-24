import { Component } from 'react';

class UserClass extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userInfo: {
				name: 'Anon',
				location: 'Earth',
				avatar_url: '',
			},
			count: 0,
			count2: 1,
		};
	}
	async componentDidMount() {
		const data = await fetch('https://api.github.com/users/sudakshin');
		const json = await data.json();

		this.setState({
			userInfo: json,
		});
	}

	render() {
		const { name, avatar_url } = this.state.userInfo;

		return (
			<div className='user-card'>
				<img
					src={avatar_url}
					alt=''
				/>
				<h2>Name: {name}</h2>
				<h3>Location: New Delhi</h3>
			</div>
		);
	}
}

export default UserClass;
