import "./HotelHero.css";
import FlightImg from "../../assets/Images/FlightImg.svg";
import HotelImg from "../../assets/Images/HotelImg.svg";
import EvenyImg from "../../assets/Images/EventImg.svg";
import UserImg from "../../assets/Images/user.svg";
import DropdownImg from "../../assets/Images/dropdown.svg";
// import flyingImg from "../../assets/Images/flyingto.svg";
import searcImg from "../../assets/Images/search.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import HotelCalender from "../../utility/HotelCalender";

const HotelHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [adult, setAdult] = useState(1);

  const handleIncreaseAdult = () => {
    setAdult(adult + 1);
  };

  const handleDecreaseAdult = () => {
    if (adult > 1) {
      setAdult(adult - 1);
    }
  };

  const [children, setChildren] = useState(0);
  const handleIncreaseChildren = () => {
    setChildren(children + 1);
  };

  const handleDecreaseChildren = () => {
    if (children > 1) {
      setChildren(children - 1);
    }
  };

  const [infant, setInfant] = useState(1);
  const handleIncreaseInfant = () => {
    setInfant(infant + 1);
  };

  const handleDecreaseInfant = () => {
    if (infant > 1) {
      setInfant(infant - 1);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    toggleDropdown();
  };

  return (
    <div>
      <div className="hotelflight_container">
        <div className="hotelflight_head">
          <h1>Easy Booking, Easy Trip With LynKKupp</h1>
          <h4>Your perfect stop for flights, hotels and tickets booking</h4>
        </div>
        <div>
          <div>
            <ul className="hotelflight_link">
              <li >
                <NavLink
                  to="/"
                  activeNlassName="active"
                  className="hotellist flex justify-end items-center gap-2"
                >
                  <img src={FlightImg} alt="" className="w-5" />
                  Book Flights
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hotels"
                  activeNlassName="active"
                  className="hotellist flex justify-end items-center gap-2"
                >
                  <img src={HotelImg} alt="" className="w-5" />
                  Hotels
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  activeNlassName="active"
                  className="hotellist flex justify-end items-center gap-2"
                >
                  <img src={EvenyImg} alt="" className="w-5" />
                  Events
                </NavLink>
              </li>
              <li className="hotelflighthotel">
                <NavLink to="/events" activeNlassName="active"
                className="hotellist flex justify-end items-center gap-2"
                >
                <img src={FlightImg} alt="" className="w-5" />
                {/* <img src={HotelImg} alt="" className="w-5" /> */}
                  Flight+Hotel
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="form_container">
            <form action="">
              <div className="formDisplay flex gap-3"></div>
              <div className="date_container flex mt-2 ">
                <div className="going bg-[#fff] px-4 py-2 flex justify-center items-center">
                  <img src={searcImg} alt="" />
                  <input
                    type="search"
                    placeholder="City or airport"
                    className="ml-7"
                  />
                </div>

                <div className="leaving">
                  <HotelCalender />
                </div>

                <div className="dropdown relative">
                  <p onClick={toggleDropdown} className="hoteldropDown ">
                    {isOpen ? " " : " "}
                    <img src={UserImg} alt="" />
                    Rooms and guest
                    <img src={DropdownImg} alt="" />
                  </p>
                  {isOpen && (
                    <div className="hoteldropdownContent px-6 py-8 text-[#000] bg-[#fff] mt-10 absolute top-5 z-10">
                      <p className="flex gap-4 justify-start items-center">
                        <span className="font-bold text-xl flex flex-col ">
                          Adult{" "}
                          <span className="under_text"> &lt;14 years </span>
                        </span>
                        <span
                          className="border p-2 w-1 h-1 flex justify-center items-center ml-5"
                          onClick={handleDecreaseAdult}
                          disabled={adult <= 1}
                        >
                          -
                        </span>
                        <span className="font-bold">{adult}</span>
                        <span
                          onClick={handleIncreaseAdult}
                          className="border p-2 w-1 h-1 flex justify-center items-center "
                        >
                          +
                        </span>
                      </p>
                      <p className="flex gap-4 justify-start items-center">
                        <span className="font-bold text-xl flex flex-col ">
                          Chidren{" "}
                          <span className="under_text"> 2-4 years </span>
                        </span>
                        <span
                          className="border p-2 w-1 h-1 flex justify-center items-center "
                          onClick={handleDecreaseChildren}
                          disabled={children <= 1}
                        >
                          -
                        </span>
                        <span className="font-bold">{children}</span>
                        <span
                          className="border p-2 w-1 h-1 flex justify-center items-center "
                          onClick={handleIncreaseChildren}
                        >
                          +
                        </span>
                      </p>
                      <p className="flex gap-4 justify-start items-center">
                        <span className="font-bold text-xl flex flex-col ">
                          Infant
                          <span className="under_text"> &lt; 2 years </span>
                        </span>
                        <span
                          className="border p-2 w-1 h-1 flex justify-center items-center ml-5"
                          onClick={handleDecreaseInfant}
                          disabled={infant <= 1}
                        >
                          -
                        </span>
                        <span className="font-bold">{infant}</span>
                        <span
                          className="border p-2 w-1 h-1 flex justify-center items-center "
                          onClick={handleIncreaseInfant}
                        >
                          +
                        </span>
                      </p>
                      <button
                        onClick={handleClick}
                        className="px-4 py-1 bg-[#0588BD] border-none text-[#fff] float-right mt-4 text-sm"
                      >
                        Done
                      </button>
                    </div>
                  )}
                </div>

                <div className="Searchlocation">
                  <h4>Search location</h4>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelHero;
