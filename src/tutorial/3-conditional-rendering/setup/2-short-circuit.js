import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState(true);
	const firstValue = text || 'hello world';
	const secondValue = text && 'hello world';

	return (
		<>
			<h2>{text || firstValue}</h2>
			<h2>{text && secondValue}</h2>
		</>
	);
};

export default ShortCircuit;
