import claendarImg from "../assets/Images/clarity_calendar-line.svg";
import "./HotelCalender.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

// eslint-disable-next-line react/prop-types
const HotelCalender = ({ checkInDate, setCheckInDate, checkOutDate, setCheckOutDate }) => {
	const [openDate, setOpenDate] = useState(false);

	const handleSelect = (ranges) => {
		setCheckInDate(ranges.selection.startDate);
		setCheckOutDate(ranges.selection.endDate);
	}

	return (
		<div>
			<div className="hotelSearchItem">
				<div className="hotelleavingNow">
					<img src={claendarImg} alt="" className="hotelcalenderImg" />
					<span
						onClick={() => setOpenDate(!openDate)}
						className="hoteldateMonth"
					>{`${format(checkInDate, "dd/MM/yy")} `}</span>
				</div>

				<div className="hotelreturningNow">
					<img src={claendarImg} alt="" className="hotelcalenderImg" />
					<span
						onClick={() => setOpenDate(!openDate)}
						className="hoteldateMonth"
					>{`${format(checkOutDate, "dd/MM/yy")} `}</span>
				</div>

				{openDate && (
					<DateRange
						editableDateInputs={true}
						onChange={handleSelect}
						moveRangeOnFirstSelection={false}
						ranges={[{
							startDate: checkInDate,
							endDate: checkOutDate,
							key: "selection"
						}]}
						months={2}
						className="hoteldate"
						direction="horizontal"
					/>
				)}
			</div>
		</div>
	);
};

export default HotelCalender;
