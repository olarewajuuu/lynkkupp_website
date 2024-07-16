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
	];
	return (
		<div className="p-16 md:mt-10">
			<h2 className="text-[#494949] text-lg md:text-4xl font-bold mb-4 ">
				Latest Events
			</h2>
			<div className="flex flex-wrap justify-center md:justify-between -mx-2">
				{images.map((image, index) => (
					<div
						key={index}
						className={`w-full md:w-1/2 p-2 ${
							index !== 0 ? "hidden md:block" : "block"
						}`}
					>
						<div className="relative overflow-hidden shadow-lg">
							<img
								src={image.src}
								alt={image.title}
								className="w-full h-[207px] md:h-[444px] object-cover"
							/>
							<div className="absolute inset-0 bg-[#d9d9d9] bg-opacity-5 flex flex-col items-start p-4 justify-end md:items-center text-center ">
								<span className="text-white font-bold text-2xl md:text-center">
									{image.title}
								</span>
								<span className="text-white font-normal text-lg md:text-center">
									{image.subtitle}
								</span>
							</div>
							{/* Slider Control */}
							{index === 0 && (
								<button
									type="button"
									className="flex absolute top-1/2 transform -translate-y-1/2 -left-8 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
									data-carousel-prev
								>
									<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#d9d9d9] group-hover:bg-[#d9d9d9]/50 group-focus:ring-4 group-focus:ring-[#d9d9d9]/70 group-focus:outline-none">
										<svg
											className="w-5 h-5 text-[#55bfea] sm:w-6 sm:h-6"
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
										<span className="hidden">Previous</span>
									</span>
								</button>
							)}
							{index === 1 && (
								<button
									type="button"
									className="flex absolute top-1/2 transform -translate-y-1/2 -right-8 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
									data-carousel-next
								>
									<span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-[#d9d9d9] group-hover:bg-[#d9d9d9]/50 group-focus:ring-4 group-focus:ring-[#d9d9d9]/70 group-focus:outline-none">
										<svg
											className="w-5 h-5 text-[#55bfea] sm:w-6 sm:h-6"
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
										<span className="hidden">Next</span>
									</span>
								</button>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Latest;
