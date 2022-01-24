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
	const increaseLater = () => {
		setTimeout(
			() =>
				setValue((prevValue) => {
					return prevValue + 1;
				}),
			2000
		);
	};
	return (
		<>
			<section>
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
			</section>
			<section style={{ margin: '4em 0' }}>
				<h2>Complex regular counter</h2>
				<h1>{value}</h1>
				<button onClick={increaseLater} className="btn">
					increase Later
				</button>
			</section>
		</>
	);
};

export default UseStateCounter;
