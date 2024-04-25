import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./components/Profile";
import Books from "./components/Books";
const App = () => {
	return (
		<div className="page-container">
			<div className="content-wrap">
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/books" element={<Books />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
};

export default App;
