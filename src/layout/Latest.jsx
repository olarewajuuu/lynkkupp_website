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
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Latest;
