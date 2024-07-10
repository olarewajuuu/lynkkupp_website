import iphone from "../assets/Images/iPhone 15.svg";
import googleImage from "../assets/Images/Frame 172.svg";

const Mobile = () => {
	return (
		<div className="bg-[#55BFEA] h-[231px] md:h-[403px] md:mt-10 flex items-center">
			<div className="flex flex-row items-center w-full p-4 md:p-16">
				<img
					src={iphone}
					alt="iphone image"
					className="w-[150px] h-[250px] md:w-[655px]  md:h-[491px] object-contain md:-mt-44"
				/>
				<div className="flex flex-col md:ml-8 text-white text-center md:pr-24">
					<h2 className="font-bold text-2xl mb-2 ">
						Get Ready for the Ultimate Mobile Convenience!
					</h2>
					<p className="font-bold text-lg">
						Our free Mobile App will let you book flights, hotels, and event
						tickets, all while enjoying incredible deals anytime, anywhere! Stay
						tuned!
					</p>
					<button type="button" className="block  md:hidden">
						<img src={googleImage} alt="Google Button" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
