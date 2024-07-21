import iconOutline from "../assets/Images/ic_outline-local-offer.svg";
import handIcon from "../assets/Images/Vector.svg";
import smileyIcon from "../assets/Images/mdi_customer-service.svg";
import Popular from "./Popular";
import Latest from "./Latest";
import Mobile from "./Mobile";

const Offer = () => {
	return (
		<>
			<div className="hidden md:flex flex-row justify-between items-center bg-[#d9d9d9] bg-opacity-15 h-[287px] p-16 mt-10">
				<div className="flex items-center gap-4">
					<div>
						<img src={iconOutline} alt="outline icon" className="pb-8" />
					</div>
					<div className="text-[#494949] flex flex-col">
						<h1 className="text-2xl font-bold mb-2">
							Logistics & Procurement Offer
						</h1>
						<p className="text-xs font-normal">
							From booking to payment and departure to <br />
							arrival, we are with you with you on your trip
						</p>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<div>
						<img src={handIcon} alt="outline icon" className="pb-8" />
					</div>
					<div className="text-[#494949] flex flex-col">
						<h1 className="text-2xl font-bold mb-2">Pay small small</h1>
						<p className="text-xs font-normal">
							Secure your bookings with either our special <br />
							installment plan or make a lump sum <b />
							payment and enjoy a reward
						</p>
					</div>
				</div>
				<div className="flex justify-between items-center gap-4">
					<div>
						<img src={smileyIcon} alt="outline icon" className="pb-8" />
					</div>
					<div className="text-[#494949] flex flex-col">
						<div className="flex justify-between items-center text-2xl font-bold mb-2">
							<h1>24/7</h1>
							<h1>Support</h1>
						</div>
						<p className="text-xs font-normal">
							Round-the-clock customer support. How may I help you?
						</p>
					</div>
				</div>
			</div>
			<Popular />
			<Latest />
			<Mobile />
		</>
	);
};

export default Offer;
