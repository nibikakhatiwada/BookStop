import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EditorsChoice.css";
import {editorChoice} from "./data";
export default function SimpleSlider() {
	const [defaultImage, setDefaultImage] = useState({});
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const handleErrorImage = (data) => {
		setDefaultImage((prev) => ({
			...prev,
			[data.target.alt]: data.target.alt,
		}));
	};

	return (
		<div className="slider-container">
			<Slider {...settings}>
				{editorChoice.map((item) => (
					<div className="container">
						<div className="container-top">
							<img
								src={
									defaultImage[item.title] === item.title
										? defaultImage.linkDefault
										: item.linkImg
								}
								alt={item.title}
								onError={handleErrorImage}
							/>
							<h2>{item.title}</h2>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
