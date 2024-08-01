import "./EventHero.css";
import FlightImg from "../../assets/Images/FlightImg.svg";
import HotelImg from "../../assets/Images/HotelImg.svg";
import EvenyImg from "../../assets/Images/EventImg.svg";
import searcImg from "../../assets/Images/search.svg";
import { NavLink } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import goingImg from "../../assets/Images/goingtto.svg";

const EventHero = () => {
  return (
    <div>
      <div className="eventflight_container">
        <div className="eventflight_head">
          <h1>Easy Booking, Easy Trip With LynKKupp</h1>
          <h4>Your perfect stop for flights, hotels and tickets booking</h4>
        </div>
        <div>
          <div>
            <ul className="eventflight_link">
              <li className="flex gap-0 cursor-pointer">
                <NavLink
                  to="/"
                  activeNlassName="active"
                  className="eventflight flex justify-end items-center gap-2"
                >
                  <img src={FlightImg} alt="" className="w-5" />
                  Book Flights
                </NavLink>
              </li>
              <li className="flex justify-end items-center gap-2 cursor-pointer">
                <NavLink
                  to="/hotels"
                  activeNlassName="active"
                  className="flex justify-end items-center gap-2"
                >
                  <img src={HotelImg} alt="" className="w-5" />
                  Hotels
                </NavLink>
              </li>
              <li className="flex justify-end items-center gap-2 cursor-pointer">
                <NavLink
                  to="/events"
                  activeNlassName="active"
                  className="flex justify-end items-center gap-2"
                >
                  <img src={EvenyImg} alt="" className="w-5" />
                  Events
                </NavLink>
              </li>
              <li className="hotelflighthotel">
                <img src={FlightImg} alt="" className="w-5" />
                <NavLink to="/events" activeNlassName="active">
                  Flight+Hotel
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
            <div className="eventform_container">
                <form action="">
                    
                <div className="date_container flex mt-2 ">
                        <div className="going bg-[#fff] px-4 py-2 flex justify-center items-center">
                            <img src={searcImg} alt="" />
                            <input
                                type="search"
                                placeholder="Enter Keywords"
                                className="ml-7"
                            />
                        </div>

                        <div className="eventdropDown">
                        <img src={goingImg} alt="" />
                            <select name="location" className="eventdropdownContent">
                                <option value="">Select location</option>
                                <option value="">Lagos</option>
                                <option value="">Jos</option>
                                <option value="">Maduguri</option>
                                <option value="">Ilorin</option>
                                <option value="">Kano</option>
                                <option value="">Port Hacourt</option>
                                <option value="">Enugu</option>
                                <option value="">Ibadan</option>
                                <option value="">Benin</option>
                                <option value="">Zaria</option>
                                <option value="">Kaduna</option>
                            </select>
                        </div>

                        <div className="Getticket">
                            <h4>Get ticket</h4>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
