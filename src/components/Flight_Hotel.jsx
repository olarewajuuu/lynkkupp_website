import { useState } from "react";
import Flight_HotelBg from "../assets/Images/Flight_HotelBg.svg";
import ToFroArrow from "../assets/Images/To&FroArrow.svg";
import Flight_HotelCalender from "../utility/Flight_HotelCalendar";
import RoomDetails from "../utility/RoomDetails";


const Flight_Hotel = () => {
	const [destinationFrom, setDestinationFrom] = useState("Radisson Blue");
	const [destinationTo, setDestinationTo] = useState("Summit Resort");

	
	return (
		<div>
			<div className="flex flex-col-reverse md:flex-col items-center justify-center">
				<div className="flex flex-col p-4 md:p-0 md:flex-row md:justify-between md:items-center w-full">
					<form className="flex flex-col md:flex-row w-full gap-4">
						<div className="flex flex-row gap-4">
							<div className="flex flex-col justify-center border border-gray-300  h-[55px] md:h-[70px] w-[191px] rounded-md p-4 mr-2 mb-2 md:mb-0">
								<p className="text-[#232222] text-[13px] font-normal">From</p>
								<input
									type="text"
									onChange={(e) => setDestinationFrom(e.target.value)}
									value={destinationFrom}
									className="block w-full text-[#494949] text-base font-normal"
								/>
							</div>

							<img src={ToFroArrow} alt="arrow" className="-m-8 -mb-8 " />
							<div className="flex flex-col justify-center border border-gray-300 h-[55px] md:h-[70px] w-[191px] rounded-md p-4 mr-2 mb-2 md:mb-0">
								<p className="text-[#232222] text-[13px] ">To</p>
								<input
									type="text"
									placeholder="To"
									value={destinationTo}
									onChange={(e) => setDestinationTo(e.target.value)}
									className="block w-full text-[#494949] text-base"
								/>
							</div>
						</div>

						<Flight_HotelCalender />
						<RoomDetails />
						<button className="bg-[#55BFEA] text-white text-[19px] w-full font-bold md:w-[162px] h-[70px] rounded-md" >
							Search
						</button>
					</form>
				</div>
				<div className="relative overflow-hidden md:mt-8">
					<img
						src={Flight_HotelBg}
						alt="Flight_Hotel Background"
						className="bg-cover object-cover bg-no-repeat h-[208px] md:w-[1242px] md:h-[273px]"
					/>
					<div className="absolute top-0 left-0 bottom-0 right-0 font-bold flex flex-col items-center justify-center gap-8">
						<div className="text-[13px] md:text-[23px] text-white bg-[#494949] rounded-[27px] uppercase flex flex-col py-[13px] px-10 whitespace-nowrap z-[1]">
							<h2 className="text-inherit font-[inherit]">
								Save more, achieve more with our
							</h2>
						</div>
						<button className="text-[13px] md:text-[23px] text-white uppercase cursor-pointer bg-[#55bfea] border-white border-[4px] border-solid py-[25px] px-[21px]">
							Flight + Hotel Booking
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Flight_Hotel;
