import { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		username: 'Mahmoud',
		age: 30,
		message: 'random message'
	});
	const { username, age, message } = person;
	return (
		<div>
			<h3>{username}</h3>
			<h3>{age}</h3>
			<h3>{message}</h3>
			<button
				className="btn"
				onClick={() => {
					setPerson({
						...person,
						message: 'Hello people'
					});
				}}
			>
				Change message
			</button>
		</div>
	);
};

export default UseStateObject;
