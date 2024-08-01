import "./FlightHero.css";
import FlightImg from "../../assets/Images/FlightImg.svg";
import HotelImg from "../../assets/Images/HotelImg.svg";
import EvenyImg from "../../assets/Images/EventImg.svg";
import flyingImg from "../../assets/Images/flyingto.svg";
import goingImg from "../../assets/Images/goingtto.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../../utility/Calendar";

const FlightHero = () => {
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
      <div className="flight_container">
        <div className="flight_head">
          <h1>Easy Booking, Easy Trip With LynKKupp</h1>
          <h4>Your perfect stop for flights, hotels and tickets booking</h4>
        </div>
        <div>
          <div>
            <ul className="flight_link">
              <li className="flex gap-2 activ cursor-pointer">
                <NavLink to="/" activeNlassName="active">
                  <img src={FlightImg} alt="" className="w-5" />
                  Book Flights
                </NavLink>
              </li>
              <li className="flex justify-end items-center gap-2 cursor-pointer">
                <img src={HotelImg} alt="" className="w-5" />
                <NavLink to="/hotels" activeNlassName="active">
                  Hotels
                </NavLink>
              </li>
              <li className="flex justify-end items-center gap-2 cursor-pointer">
                <img src={EvenyImg} alt="" className="w-5" />
                <NavLink to="/events" activeNlassName="active">
                  Events
                </NavLink>
              </li>
              <li className="flighthotel">
                <img src={FlightImg} alt="" className="w-5" />
                {/* <img src={HotelImg} alt="" className="w-5" /> */}
                <NavLink to="/events" activeNlassName="active">
                  Flight+Hotel
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="form_container">
            <form action="">
              <div className="formDisplay flex gap-3">
                <div>
                  <select
                    name="trip"
                    id="trip"
                    className="px-2 bg-[#0588BD] text-[#fff]"
                  >
                    <option value="">Round trip</option>
                    <option value="">One-way</option>
                    <option value="">Multi-city</option>
                  </select>
                </div>
                <div>
                  <select
                    name="Econonmy"
                    id="Econonmy"
                    className="px-2 bg-[#0588BD] text-[#fff]"
                  >
                    <option value="">Econonmy</option>
                    <option value="">Premium economy</option>
                    <option value="">Business</option>
                    <option value="">First class</option>
                  </select>
                </div>
                <div className="dropdown relative">
                  <p
                    onClick={toggleDropdown}
                    className="dropDown "
                  >
                    {isOpen ? "1 passengers " : "1 passenger   v"}
                  </p>
                  {isOpen && (
                    <div className="dropdownContent px-6 py-8 text-[#000] bg-[#fff] mt-4 absolute top-5 z-10">
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
              </div>
              <div className="date_container flex mt-2 ">
                <div className="flying">
                  <div className="going bg-[#fff] px-4 py-2 mb-1">
                    <p className="flex gap-3 text-[#99A0A8] font-bold ">
                      <img src={flyingImg} alt="" />
                      Flying from ?
                    </p>
                    <input
                      type="search"
                      placeholder="City or airport"
                      className="ml-7"
                    />
                  </div>
                  <div className="going bg-[#fff] px-4 py-2">
                    <p className="flex gap-3 text-[#99A0A8] font-bold">
                      {" "}
                      <img src={goingImg} alt="" />
                      Going to ?
                    </p>
                    <input
                      type="search"
                      placeholder="City or airport"
                      className="ml-7"
                    />
                  </div>
                </div>
                <div className="leaving">
                  <Calendar />
                </div>
                <div className="lynkup">
                  <h4>LynKKupp</h4>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightHero;
