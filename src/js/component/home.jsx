import React from "react";

import Card from "./Card";
import Jumbo from "./Jumbo.jsx";
import NavBar from "./NavBar.jsx";
import Section from "./Section.jsx";

const Home = () => {
	return (
		<div>
			<NavBar />
			<Section />
			<Jumbo />
			<Card />
		</div>
	);
};

export default Home;
