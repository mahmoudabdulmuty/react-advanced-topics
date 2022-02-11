import { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
	const refElement = useRef(null);
	const refHeading = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refElement.current.value);
		console.log(refHeading.current);
	};
	useEffect(() => {
		refElement.current.focus();
	});
	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="form-control">
				<label htmlFor="firstName">Name : </label>
				<input type="text" id="firstName" name="firstName" ref={refElement} />
			</div>
			<h1 onClick={() => console.log(refHeading.current)} ref={refHeading}>
				Hello React
			</h1>
		</form>
	);
};

export default UseRefBasics;
