import React, { useState } from 'react';

const UseStateBasics = () => {
	const [isTitle, setIsTitle] = useState(true);
	const handleClick = () => {
		setIsTitle((prevTitle) => !prevTitle);
	};
	return (
		<>
			<h2>{isTitle ? 'random title' : 'hello people'}</h2>
			<button onClick={handleClick} className="btn">
				change title
			</button>
		</>
	);
};

export default UseStateBasics;
