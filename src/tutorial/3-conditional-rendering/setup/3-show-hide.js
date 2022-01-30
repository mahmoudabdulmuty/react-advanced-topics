import React, { useEffect, useState } from 'react';

const ShowHide = () => {
	const [isShown, setIsShown] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const handleClick = () => {
		setIsShown(!isShown);
	};
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});
		return () => {
			window.removeEventListener('resize', () => {
				setWidth(window.innerWidth);
			});
		};
	}, []);
	return (
		<>
			<button onClick={handleClick} className="btn">
				Show / Hide Component
			</button>
			{isShown && (
				<>
					<h1>Window</h1>
					<h2>Size : {width}</h2>
				</>
			)}
		</>
	);
};

export default ShowHide;
