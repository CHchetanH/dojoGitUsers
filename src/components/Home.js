import { useState } from "react";
import UserList from "./UserList";
const Home = () => {
	const [names, setName] = useState([
		{ id: 1, name: "chetan", city: "chandrapur", age: 27 },
		{ id: 2, name: "minal", city: "pune", age: 31 },
		{ id: 3, name: "snehal", city: "pune", age: 33 },
	]);

	return (
		<div className="home">
			<UserList names={names} title={"All Names!"} />
		</div>
	);
};

export default Home;
