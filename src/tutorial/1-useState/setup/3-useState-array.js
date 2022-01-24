import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	const [people, setPeople] = useState(data);

	const handleClear = (id) => {
		setPeople((prevPeople) => {
			return prevPeople.filter((person) => {
				return person.id !== id;
			});
		});
	};

	return (
		<>
			{people.map((person) => {
				const { id, name } = person;
				return (
					<div key={id} className="item">
						<h2>{name}</h2>
						<button className="btn" onClick={() => handleClear(id)}>
							clear item
						</button>
					</div>
				);
			})}
			<button
				onClick={() => {
					setPeople([]);
				}}
				className="btn"
			>
				clear items
			</button>
		</>
	);
};

export default UseStateArray;
