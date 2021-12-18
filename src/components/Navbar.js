import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div>logo</div>
			<div className="navbar-links">
				<Link to={"/"}>Home</Link>
				<Link to={"/about"}>About</Link>
				<Link to={"/users"}>Users</Link>
			</div>
		</div>
	);
};

export default Navbar;
