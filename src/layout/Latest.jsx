import { useState, useEffect } from "react";

import event1 from "../assets/Images/Rectangle 61.svg";
import event2 from "../assets/Images/Rectangle 62.svg";

const Latest = () => {
	const images = [
		{
			src: event1,
			title: "Scale - up Conference",
			subtitle: "Saturday, June 22, 2024",
		},
		{
			src: event2,
			title: "Breakfast Meeting With Professionals",
			subtitle: "Sunday, June 23, 2024",
		},
		{
			src: event1,
			title: "Scale - up Conference",
			subtitle: "Saturday, June 22, 2024",
		},
		{
			src: event2,
			title: "Breakfast Meeting With Professionals",
			subtitle: "Sunday, June 23, 2024",
		},
		{
			src: event1,
			title: "Scale - up Conference",
			subtitle: "Saturday, June 22, 2024",
		},
		{
			src: event2,
			title: "Breakfast Meeting With Professionals",
			subtitle: "Sunday, June 23, 2024",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0
				? images.length - (isMobile ? 1 : 2)
				: prevIndex - (isMobile ? 1 : 2)
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - (isMobile ? 1 : 2)
				? 0
				: prevIndex + (isMobile ? 1 : 2)
		);
	};

	return (
		<div className="p-16 md:mt-10">
			<h2 className="text-[#494949] text-lg md:text-4xl font-bold mb-4">
				Latest Events
			</h2>
			<div className="flex justify-center md:justify-between relative">
				<div className="relative w-full flex overflow-hidden">
					<div
						className="flex transition-transform duration-700 ease-in-out"
						style={{
							transform: `translateX(-${
								currentIndex * (isMobile ? 100 : 50)
							}%)`,
						}}
					>
						{images.map((image, index) => (
							<div
								key={index}
								className={`flex-shrink-0 ${isMobile ? "w-full" : "w-1/2"} ${
									index % 2 === 1 && !isMobile ? "ml-8" : ""
								}`}
							>
								<div className="relative overflow-hidden shadow-lg">
									<img
										src={image.src}
										alt={image.title}
										className="w-full h-[207px] md:h-[444px] object-cover"
									/>
									<div className="absolute inset-0 bg-[#d9d9d9] bg-opacity-5 flex flex-col items-start p-4 justify-end md:items-center text-center">
										<span className="text-white font-bold text-xl md:text-2xl md:text-center">
											{image.title}
										</span>
										<span className="text-white font-normal text-sm md:text-lg md:text-center">
											{image.subtitle}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<button
					onClick={handlePrev}
					className="absolute top-1/2 transform -translate-y-1/2 left-2 md:left-4 z-10 text-[#55bfea]"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15 19l-7-7 7-7"
						></path>
					</svg>
				</button>
				<button
					onClick={handleNext}
					className="absolute top-1/2 transform -translate-y-1/2 right-2 md:right-4 z-10 text-[#55bfea]"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 5l7 7-7 7"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Latest;
