import { useState, useEffect } from "react";

import hotel1 from "../assets/Images/Rectangle 58.svg";
import hotel2 from "../assets/Images/Rectangle 59.svg";
import hotel3 from "../assets/Images/Rectangle 60.svg";

const Popular = () => {
	const images = [
		{
			src: hotel1,
			title: "Ogun State",
			subtitle: "Continental Suites",
		},
		{
			src: hotel2,
			title: "Lagos",
			subtitle: "Raddison Blu",
		},
		{
			src: hotel3,
			title: "Ekiti",
			subtitle: "Delight Hotel and Suites",
		},
		{
			src: hotel1,
			title: "Ogun State",
			subtitle: "Continental Suites",
		},
		{
			src: hotel2,
			title: "Lagos",
			subtitle: "Raddison Blu",
		},
		{
			src: hotel3,
			title: "Ekiti",
			subtitle: "Delight Hotel and Suites",
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
				? images.length - (isMobile ? 1 : 3)
				: prevIndex - (isMobile ? 1 : 3)
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - (isMobile ? 1 : 3)
				? 0
				: prevIndex + (isMobile ? 1 : 3)
		);
	};

	return (
		<div className="p-16 md:mt-10">
			<h2 className="text-[#494949] text-lg md:text-4xl font-bold mb-4">
				Popular Hotels
			</h2>
			<div className="flex justify-center md:justify-between relative">
				<div className="relative w-full flex overflow-hidden">
					<div
						className="flex transition-transform duration-700 ease-in-out"
						style={{
							transform: `translateX(-${
								currentIndex * (isMobile ? 100 : 33.33)
							}%)`,
						}}
					>
						{images.map((image, index) => (
							<div
								key={index}
								className={`flex-shrink-0 ${isMobile ? "w-full" : "w-1/3"} ${
									index % 3 !== 0 && !isMobile ? "ml-8" : ""
								}`}
							>
								<div className="relative overflow-hidden shadow-lg">
									<img
										src={image.src}
										alt={image.title}
										className="w-full h-[204px] md:h-[444px] object-cover"
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
						viewBox="0 0 24 24"
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

export default Popular;
