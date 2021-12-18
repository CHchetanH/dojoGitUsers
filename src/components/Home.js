const Home = () => {
	const handleClick = () => {
		console.log("Clicked");
	};
	const handleClickAgain = (e, name) => {
		console.log(e.target);
		console.log(name);
	};

	return (
		<div className="home">
			<h1>Home</h1>
			<button onClick={handleClick}>Click Me </button>
			<button
				onClick={(e) => {
					handleClickAgain(e, "chetan");
				}}
			>
				Click Me{" "}
			</button>
		</div>
	);
};

export default Home;
