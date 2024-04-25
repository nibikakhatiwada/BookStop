import React from "react";
import "./Books.css";
const Books = () => {
	return (
		<div className="b_container">
			<img src=""></img>
			<title>The Lord of the Rings</title>
			<h1>Genre: Action, Adventure, Fantasy</h1>
			<h2>Ratings:9.1/10</h2>
			<p>
				The Lord of the Rings is an epic high-fantasy novel by English author
				and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth
				at some time in the distant past, the story began as a sequel to
				Tolkien's 1937 children's book The Hobbit, but eventually developed into
				a much larger work.
			</p>
			<button>Add to your list</button>
		</div>
	);
};

export default Books;
