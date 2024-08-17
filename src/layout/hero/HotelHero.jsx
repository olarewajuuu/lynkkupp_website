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
  
  const [rooms, setRooms] = useState([{ id: 1, adults: 1, children: 0 }]);
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const addRoom = (e) => {
		e.preventDefault();
		setRooms([...rooms, { id: rooms.length + 1, adults: 1, children: 0 }]);
	};

	const removeRoom = (id) => {
		setRooms(rooms.filter((room) => room.id !== id));
	};

	const updateAdults = (id, increment) => {
		setRooms(
			rooms.map((room) =>
				room.id === id
					? {
							...room,
							adults: Math.max(1, room.adults + (increment ? 1 : -1)),
					  }
					: room
			)
		);
	};

	const updateChildren = (id, increment) => {
		setRooms(
			rooms.map((room) =>
				room.id === id
					? {
							...room,
							children: Math.max(0, room.children + (increment ? 1 : -1)),
					  }
					: room
			)
		);
	};

	// Stop the click event propagation inside the dropdown
	const handleDropdownClick = (e) => {
		e.stopPropagation();
	};

	const handleDone = (event) => {
		event.preventDefault();
		// Reset all room data
		setRooms([{ id: 1, adults: 1, children: 0 }]);
		// Close the dropdown
		setIsOpen(false);
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
            <ul className="hotel_link">
              <li className="flex justify-end items-center gap-2 cursor-pointer">
                  <img src={FlightImg} alt="" className="w-5" />
                <NavLink to="/" activeNlassName="active">
                  Book Flights
                </NavLink>
              </li>
              <li className="flex justify-end items-center gap-2 cursor-pointer">
                <NavLink to="/hotels" activeNlassName="active" className="flex justify-end items-center gap-2 cursor-pointer">
                  <img src={HotelImg} alt="" className="w-5" />
                  Hotels
                </NavLink>
              </li>
              <li className="flex justify-end items-center gap-2 cursor-pointer">
                <img src={EvenyImg} alt="" className="w-5" />
                <NavLink to="/events" activeNlassName="active">
                  Events
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
        <div>
          <div className="hotelform_container">
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
					<div
						onClick={handleDropdownClick}
						className="px-4 py-4 w-[300px] h-[300px] bg-[#fff] flex flex-col items-start overflow-y-auto mt-10 absolute top-20 left-0 z-10"
					>
						{rooms.map((room, index) => (
							<div key={room.id} className="mb-4 w-full">
								<div className="flex justify-between items-center">
									<h2 className="text-lg text-[#232222] text-opacity-35">
										Room {room.id}
									</h2>
									{index > 0 && (
										<button
											onClick={(e) => {
												e.preventDefault();
												removeRoom(room.id);
											}}
											className="text-[#55bfea] text-lg"
										>
											Remove
										</button>
									)}
								</div>
								<div className="mt-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-[#494949] font-medium">
											Adults
										</span>
										<div className="flex items-center space-x-2">
											<button
												className="bg-gray-200 text-[#494949] px-2 py-1 rounded"
												onClick={(e) => {
													e.preventDefault();
													updateAdults(room.id, false);
												}}
											>
												-
											</button>
											<span className="text-sm">{room.adults}</span>
											<button
												className=" bg-[#55bfea] bg-opacity-20 text-[#494949] px-2 py-1 rounded"
												onClick={(e) => {
													e.preventDefault();
													updateAdults(room.id, true);
												}}
											>
												+
											</button>
										</div>
									</div>
									<p className="text-xs text-[#232222]">{">"} 14 years</p>
								</div>
								<div className="mt-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-[#494949] font-medium">
											Children
										</span>
										<div className="flex items-center space-x-2">
											<button
												className="bg-gray-200  px-2 py-1 rounded"
												onClick={(e) => {
													e.preventDefault();
													updateChildren(room.id, false);
												}}
											>
												-
											</button>
											<span className="text-sm text-[#232222]">
												{room.children}
											</span>
											<button
												className=" bg-[#55bfea] bg-opacity-20 px-2 py-1 rounded"
												onClick={(e) => {
													e.preventDefault();
													updateChildren(room.id, true);
												}}
											>
												+
											</button>
										</div>
									</div>
									<p className="text-xs text-[#232222]">2-4 years</p>
									<hr className="my-4" />
								</div>
							</div>
						))}
						<div className="flex justify-between w-full">
							<button
								onClick={addRoom}
								className="border-2 border-[#232222] border-opacity-35 text-[#232222] text-opacity-35 py-2 px-4 rounded-md"
							>
								Add room {rooms.length + 1} +
							</button>
							<button
								onClick={handleDone}
								className="bg-[#55bfea] text-white py-2 px-4 rounded"
							>
								Done
							</button>
						</div>
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