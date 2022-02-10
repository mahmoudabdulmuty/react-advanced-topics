import { useState } from 'react';

const ControlledInputs = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		email: '',
		id: Math.random()
	});
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.firstName && formData.email) setPeople([...people, formData]);
		setFormData({
			firstName: '',
			email: '',
			id: Math.random()
		});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

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
				<button>add person</button>
			</form>
			{people.map(({ id, firstName, email }) => {
				return (
					<div className="item" key={id}>
						<h4>{firstName}</h4>
						<p>{email}</p>
					</div>
				);
			})}
		</article>
	);
};

export default ControlledInputs;
