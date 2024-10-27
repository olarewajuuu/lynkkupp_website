import "./EventHero.css";
import FlightImg from "../../assets/Images/FlightImg.svg";
import HotelImg from "../../assets/Images/HotelImg.svg";
import EvenyImg from "../../assets/Images/EventImg.svg";
import searcImg from "../../assets/Images/search.svg";
import { NavLink } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import goingImg from "../../assets/Images/goingtto.svg";
import { useNavigate } from "react-router-dom";

const EventHero = () => {

  const navigate = useNavigate();

	const handleClick = () => {
		navigate('/eventticket'); //  route here
	};


  return (
    <div>
      <div className="eventflight_container">
        <div className="eventflight_head">
          <h1>Easy Booking, Easy Trip With LynKKupp</h1>
          <h4>Your perfect stop for flights, hotels and tickets booking</h4>
        </div>
        <div>
        <div className="ml-20">
            <ul className="event_link">
              <li className="evennt flex justify-end items-center gap-2 cursor-pointer">
                  <img src={FlightImg} alt="" className="w-5" />
                <NavLink to="/" activeNlassName="active">
                  Book Flights
                </NavLink>
              </li>
              <li className="flex justify-end items-center gap-2 cursor-pointer">
                  <img src={HotelImg} alt="" className="w-5" />
                <NavLink to="/hotels" activeNlassName="active">
                  Hotels
                </NavLink>
              </li>
              <li >
                <NavLink to="/events" activeNlassName="active" className="evnt flex justify-end items-center gap-2 cursor-pointer">
                <img src={EvenyImg} alt="" className="w-5" />
                  Events
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
                                className="ml-7 outline-none w-[250px]"
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

                        <div onClick={handleClick} className="Getticket">
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