import { useEffect, useState } from 'react';

const ControlledInputs = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		email: '',
		age: ''
	});
	const [people, setPeople] = useState(
		() => JSON.parse(localStorage.getItem('people')) || []
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.firstName && formData.email) {
			setPeople([
				...people,
				{ ...formData, id: new Date().getTime().toString() }
			]);
		}
		setFormData({
			firstName: '',
			email: '',
			age: ''
		});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	useEffect(() => {
		localStorage.setItem('people', JSON.stringify(people));
	}, [people]);
	return (
		<article>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="firstName">Name : </label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="email">Email : </label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="age">Age : </label>
					<input
						type="number"
						id="age"
						name="age"
						value={formData.age}
						onChange={handleChange}
					/>
				</div>
				<button>add person</button>
			</form>
			{people.map(({ id, firstName, email, age }) => {
				return (
					<div className="item" key={id}>
						<h4>{firstName}</h4>
						<p>{email}</p>
						<p>{age}</p>
					</div>
				);
			})}
		</article>
	);
};

export default ControlledInputs;
