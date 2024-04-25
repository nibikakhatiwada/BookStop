import React from "react";
import Carousel from "./Carousel";
import SimpleSlider from "./EditorsChoice";
import Bookstop1 from "../Images/Bookstop1.jpg";
const Home = () => {
	return (
		<>
			<div className="Homepage">
				<img src={Bookstop1} className="" />
				<div class="wc-text">
					<p>Welcome to BOOKSTOP</p>
					<h1>Discover new Books everyday</h1>
				</div>
			</div>
			<Carousel />
			<Carousel />
			<Carousel />
			<Carousel />
		</>
	);
};

export default Home;
