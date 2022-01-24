import { useState } from 'react';

const UseStateCounter = () => {
	const [value, setValue] = useState(0);
	const handleIncrease = () => {
		setValue((prevValue) => prevValue + 1);
	};
	const handleReset = () => {
		setValue(0);
	};
	const handleDecrease = () => {
		setValue((prevValue) => prevValue - 1);
	};
	return (
		<>
			<h2>regular counter</h2>
			<h1>{value}</h1>
			<button onClick={handleDecrease} className="btn">
				decrease
			</button>
			<button onClick={handleReset} className="btn">
				reset
			</button>
			<button onClick={handleIncrease} className="btn">
				increase
			</button>
		</>
	);
};

export default UseStateCounter;
