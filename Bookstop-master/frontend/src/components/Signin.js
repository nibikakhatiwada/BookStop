import React from "react";
import "./LoginSignup.css";
const Signin = () => {
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
								<input type="text" placeholder="Name" required />
							</div>
							<div className="loginPassword">
								<input type="password" placeholder="Password" required />
							</div>
							<input type="submit" value="Submit" className="loginBtn" />
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signin;
