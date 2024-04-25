import React from "react";
import Profilepic from "../Images/Profilepic.png";
import "./Profile.css";
import Carousel from "./Carousel";
const Profile = () => {
	return (
		<div className="profile-card">
			<div className="card-header">
				<div className="pic">
					<img src={Profilepic} className="" />
				</div>

				<h3>Name: Samuel Jackson </h3>
				<p>Email:Dontcallmenigga@gmail.com </p>
				<button>Update your Profile</button>
			</div>
			<div className="myTopBooks">
				<h4>Top Books</h4>
				<Carousel />
			</div>
			<div className="myTopBooks">
				<h5>Planning</h5>
				<Carousel />
			</div>
		</div>
	);
};

export default Profile;
