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
	];
	return (
		<div className="p-16">
			<h2 className="text-[#494949] text-lg md:text-4xl font-bold mb-4 md:mt-10">
				Popular Hotels
			</h2>
			<div className="flex flex-wrap justify-center -mb-20 md:justify-between -mx-2">
				{images.map((image, index) => (
					<div
						key={index}
						className={`w-full md:w-1/3 p-2 ${
							index !== 2 ? "hidden md:block" : "block"
						}`}
					>
						<div className="relative overflow-hidden shadow-lg">
							<img
								src={image.src}
								alt={image.title}
								className="w-full h-[204px] md:h-[444px] object-cover"
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

export default Popular;
