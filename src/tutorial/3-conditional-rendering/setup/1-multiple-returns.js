import React, { useCallback, useEffect, useState } from 'react';

const MultipleReturns = () => {
	const [data, setData] = useState([]);
	const [url] = useState('https://api.github.com/users/QuincyLarson');
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const getData = useCallback(async () => {
		setIsLoading(true);
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error(res.statusText);
			const json = await res.json();
			setData(json);
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			setIsError(err.message);
		}
	}, [url]);

	useEffect(() => {
		getData();
	}, [getData]);
	const { name, html_url, avatar_url, login } = data;
	return (
		<>
			{isLoading && <h1>Loading ...</h1>}
			{isError && <h1>{isError}</h1>}
			{!isError && (
				<ul className="users">
					<li>
						<img src={avatar_url} alt={login} />
						<div>
							<h4>{name}</h4>
							<a href={html_url}>profile</a>
						</div>
					</li>
				</ul>
			)}
		</>
	);
};

export default MultipleReturns;
