import claendarImg from "../assets/Images/clarity_calendar-line.svg";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Flight_HotelCalender = () => {
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	return (
		<div className="relative flex flex-col">
			<div className=" flex items-center gap-4 md:gap-0">
				<div className=" flex items-center gap-2 border border-gray-300 h-[55px] md:h-[70px] w-[191px]  px-4 py-2 rounded-r-none rounded-md cursor-pointer">
					<img src={claendarImg} alt="" className="w-[21px] h-[21px]" />
					<span
						onClick={() => setOpenDate(!openDate)}
						className="text-[#494949] text-[13px]"
					>
						{`${format(date[0].startDate, "dd/MM/yy")} `}
					</span>
				</div>

				<div className=" flex items-center gap-2 border border-gray-300  h-[55px] md:h-[70px] w-[191px]  px-4 py-2 rounded-l-none rounded-md cursor-pointer">
					<img src={claendarImg} alt="" className="w-[21px] h-[21px]" />
					<span
						onClick={() => setOpenDate(!openDate)}
						className="text-[#494949] text-[13px]"
					>
						{`${format(date[0].endDate, "dd/MM/yy")} `}
					</span>
				</div>
			</div>

			{openDate && (
				<DateRange
					editableDateInputs={true}
					onChange={(item) => setDate([item.selection])}
					moveRangeOnFirstSelection={false}
					ranges={date}
					months={2}
					className="absolute top-20 left-0 z-10 w-[400px]  md:w-[500px]"
					direction="horizontal"
				/>
			)}
		</div>
	);
};

export default Flight_HotelCalender;
