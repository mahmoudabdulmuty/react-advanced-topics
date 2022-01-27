import React, { useEffect, useState } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(0);
	useEffect(() => {
		document.title = value;
		console.log('useEffect');
	});
	console.log('render');
	return (
		<>
			<h2>{value}</h2>
			<button onClick={() => setValue(value + 1)} className="btn">
				Click me
			</button>
		</>
	);
};

export default UseEffectBasics;
