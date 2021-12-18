import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path={"/"} exact>
						<Home />
					</Route>
					<Route path={"/about"}>
						<About />
					</Route>
					<Route path={"/users"}>
						<Users />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
