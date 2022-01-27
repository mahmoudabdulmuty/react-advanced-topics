import React, { useEffect, useState } from 'react';

const UseEffectFetchData = () => {
	const [users, setUsers] = useState([]);

	const getUsers = () => {
		fetch('https://api.github.com/users')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	};

	useEffect(() => {
		getUsers();
	}, []);
	return (
		<>
			<h3>github users</h3>
			<ul className="users">
				{users.map(({ id, avatar_url, login, url }) => {
					return (
						<li key={id}>
							<img src={avatar_url} alt={login} />
							<div>
								<h4>{login}</h4>
								<a href={url}>Profile</a>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default UseEffectFetchData;
