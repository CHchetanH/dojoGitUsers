import { useState } from "react";
const Home = () => {
	const [name, setName] = useState("Chetan");
	const handleClick = () => {
		// setName("Minal");
		setName(() => {
			if (name === "Chetan") {
				return "Minal";
			} else if (name === "Minal") {
				return "Chetan";
			}
		});
	};

	return (
		<div className="home">
			<h1>Home</h1>
			<h3>{name}</h3>
			<button onClick={handleClick}>Click Me </button>
		</div>
	);
};

export default Home;
