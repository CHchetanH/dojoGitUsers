import { useState } from "react";
const Home = () => {
	const [name, setName] = useState([
		{ id: 1, name: "chetan", city: "chandrapur", age: 27 },
		{ id: 2, name: "minal", city: "pune", age: 31 },
		{ id: 3, name: "snehal", city: "pune", age: 33 },
	]);

	return (
		<div className="home">
			{name.map((e) => (
				<div className="alluser" key={e.id}>
					<h2>{e.name}</h2>
					<h3>Lives in: {e.city}</h3>
					<h4>{e.age} year Old</h4>
				</div>
			))}
		</div>
	);
};

export default Home;
