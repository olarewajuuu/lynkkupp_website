import iphone from "../assets/Images/iPhone 15.svg";
import googleImage from "../assets/Images/Frame 172.svg";

const Mobile = () => {
	return (
		<div className="bg-[#55BFEA] h-[300px] md:h-[403px] md:mt-20 flex items-center">
			<div className="flex flex-row items-center md:flex-row w-full">
				<img
					src={iphone}
					alt="iphone image"
					className="w-[200px] md:w-[655px] md:h-[491px] object-contain md:-mt-44"
				/>
				<div className=" text-white p-4 md:text-center md:p-8">
					<h2 className="font-bold text-sm md:text-2xl mb-4 ">
						Get Ready for the Ultimate Mobile Convenience!
					</h2>
					<p className="font-bold text-xs md:text-lg">
						Our free Mobile App will let you book flights, hotels, and event
						tickets, all while enjoying incredible deals anytime, anywhere! Stay
						tuned!
					</p>
					<button type="button" className="block mt-8 md:hidden">
						<img src={googleImage} alt="Google Button" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
