import React, { useEffect, useState } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});
		return () => {
			window.removeEventListener('resize', () => {
				setWidth(window.innerWidth);
			});
		};
	});

	return (
		<>
			<h1>Window Size</h1>
			<h2>{width}</h2>
		</>
	);
};

export default UseEffectCleanup;
