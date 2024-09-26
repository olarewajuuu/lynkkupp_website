import claendarImg from "../assets/Images/clarity_calendar-line.svg";
import "./Calendar.css";
import { DateRange } from "react-date-range";
import { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";


const Calendar = () => {
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
      <div className="headerSearchItem"
         ref={dateRangeRef}
      >
        {/* <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" /> */}

        <div className="leavingNow relative">
          <img src={claendarImg} alt="" className=" absolute left-2 top-3 md:top-6 md:left-2" />
          <p className="datetext">Leaving on</p>
          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateMonth"
          >{`${format(date[0].startDate, "MMMM")} `}</span>

          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateDay"
          >{`${format(date[0].startDate, "dd")} `}</span>
          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateTextDay"
          >{`${format(date[0].startDate, "eeee")} `}</span>
        </div>

        <div className="returningNow relative">
          <img src={claendarImg} alt="" className=" absolute left-2 top-3 md:top-6 md:left-2" />
          <p className="datetext">Returning on</p>
          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateMonth"
          >{`${format(date[0].endDate, "MMMM")} `}</span>

          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateDay"
          >{`${format(date[0].endDate, "dd")} `}</span>
          <span
            onClick={() => setOpenDate(!openDate)}
            className="dateTextDay"
          >{`${format(date[0].endDate, "eeee")} `}</span>
        </div>

        {openDate && (
          <DateRange
            onClick={() => setOpenDate(!openDate)}
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}  // Disable past dates
            moveRangeOnFirstSelection={false}
            ranges={date}
            months={2}
            className="date"
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
