import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer id="footer">
			<div className="leftFooter">
				<h4>Dhulikhel,Nepal</h4>
				<h4>Post Box No.12222</h4>
				<h4>28 kilo</h4>
			</div>

			<div className="midFooter">
				<h1>BOOKSTOP</h1>
				<p>Discover new books everyday</p>

				<p>Copyrights 2022 &copy;Bookstop</p>
			</div>

			<div className="rightFooter">
				<h4>Follow Us</h4>
				<a href="https://www.instagram.com/negativex_creep/?utm_medium=copy_link">
					Instagram
				</a>
				<a href="https://www.youtube.com/c/AbhaAcharya">Youtube</a>
				<a href="https://www.facebook.com/people/Nibika-Khatiwada/100009332085473/">
					Facebook
				</a>
			</div>
		</footer>
	);
};

export default Footer;
