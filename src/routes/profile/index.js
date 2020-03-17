import { h, Component } from 'preact';
import { useState, useEffect } from 'preact/hooks'
import style from './style';

const Profile = (props) => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(10);

	const { user } = props;
	// update the current time
	const increment = () => {
		setCount(count+1);
	};
	useEffect(() => {
		// start a timer for the clock:
		const timer = setInterval(setTime(Date.now()), 1000);
		return () => {
			clearInterval(timer);
		}
	}, [])

	// Note: `user` comes from the URL, courtesy of our router
	return (
		<div class={style.profile}>
			<h1>Profile: </h1>
			<p>This is the user profile for a user named {user}.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={() => increment()}>Click Me</button>
				{' '}
				Clicked {count} times.
			</p>
		</div>
	);
}
export default Profile;
