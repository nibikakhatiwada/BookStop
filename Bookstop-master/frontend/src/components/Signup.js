import React from "react";
import "./LoginSignup.css";
import {Link} from "react-router-dom";
const Signup = () => {
	return (
		<>
			<section className="signup">
				<div className="LoginSignUpContainer">
					<div className="LoginSignUpBox">
						<form className="loginForm">
							<h1>BOOKSTOP</h1>
							<div className="loginEmail">
								<input type="email" placeholder="Email" required />
							</div>
							<div className="loginPassword">
								<input type="password" placeholder="Password" required />
							</div>
							<input type="submit" value="Login" className="loginBtn" />
							<Link to="/signIn">Need an account ?</Link>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signup;
