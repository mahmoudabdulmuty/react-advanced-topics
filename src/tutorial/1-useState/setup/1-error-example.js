import React from 'react';

const ErrorExample = () => {
	let title = 'random title';
	const handleClick = () => {
		title = 'Hello People';
	};
	return (
		<React.Fragment>
			<h2>{title}</h2>
			<button onClick={handleClick} className="btn">
				change title
			</button>
		</React.Fragment>
	);
};

export default ErrorExample;
