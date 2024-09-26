import claendarImg from "../assets/Images/clarity_calendar-line.svg";
import "./HotelCalender.css";
import { DateRange } from "react-date-range";
import { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const HotelCalender = () => {
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);


	const dateRangeRef = useRef(null);

	// Handle click outside the component
	const handleClickOutside = (event) => {
		if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
			setOpenDate(false);
		}
	};

	useEffect(() => {
		// Add event listener for clicks
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Remove event listener when component unmounts
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);


	return (
		<div>
			<div className="hotelSearchItem" ref={dateRangeRef}>
				<div className="hotelleavingNow">
					<img src={claendarImg} alt="" className="hotelcalenderImg" />
					<span
						onClick={() => setOpenDate(!openDate)}
						className="hoteldateMonth"
					>{`${format(date[0].startDate, "dd/MM/yy")} `}</span>
				</div>

				<div className="hotelreturningNow">
					<img src={claendarImg} alt="" className="hotelcalenderImg" />
					<span
						onClick={() => setOpenDate(!openDate)}
						className="hoteldateMonth"
					>{`${format(date[0].endDate, "dd/MM/yy")} `}</span>
				</div>

				{openDate && (
					<DateRange
						editableDateInputs={true}
						onChange={(item) => setDate([item.selection])}
						minDate={new Date()}  // Disable past dates
						moveRangeOnFirstSelection={false}
						ranges={date}
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
