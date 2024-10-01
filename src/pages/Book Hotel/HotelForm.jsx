import "../../layout/hero/HotelHero.css";
import UserImg from "../../assets/Images/user.svg";
import DropdownImg from "../../assets/Images/dropdown.svg";
// import flyingImg from "../../assets/Images/flyingto.svg";
// import searcImg from "../../assets/Images/search.svg";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import HotelCalender from "../../utility/HotelCalender";
import "./HotelForm.css"

const HotelForm = () => {
    // State variables for user input start
    const [cityOrAirport, setCityOrAirport] = useState("");
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
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
        // setRooms([{ id: 1, adults: 1, children: 0 }]);
        // Close the dropdown
        setIsOpen(false);
    };

    return (
        <form>
        <div className="formContainer">
            {/* City or Airport Input */}
            <div className="formChild_1">
                <span>Location</span>
                <input
                    type="search"
                    placeholder="City or airport"
                    value={cityOrAirport}
                    onChange={(event) => setCityOrAirport(event.target.value)}
                />
            </div>

            <div className="formChild_2">
                <p onClick={toggleDropdown}>
                    <img  src={UserImg} alt="" />
                    <span>Rooms and guest</span>
    
                    <img src={DropdownImg} alt="" />
                </p>
                {isOpen && (
                    <div
                        onClick={handleDropdownClick}
                    >
                        {rooms.map((room, index) => (
                            <div key={room.id}>
                                <div>
                                    <h2>
                                        Room {room.id}
                                    </h2>
                                    {index > 0 && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                removeRoom(room.id);
                                            }}
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <div>
                                    <div>
                                        <span>
                                            Adults
                                        </span>
                                        <div>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    updateAdults(room.id, false);
                                                }}
                                            >
                                                -
                                            </button>
                                            <span>{room.adults}</span>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    updateAdults(room.id, true);
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <p>
                                        {">"} 14 years
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <span>
                                            Children
                                        </span>
                                        <div>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    updateChildren(room.id, false);
                                                }}
                                            >
                                                -
                                            </button>
                                            <span>
                                                {room.children}
                                            </span>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    updateChildren(room.id, true);
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <p>2-4 years</p>
                                    <hr/>
                                </div>
                            </div>
                        ))}
                        <div>
                            <button
                                onClick={addRoom}
                            >
                                Add room {rooms.length + 1} +
                            </button>
                            <button
                                onClick={handleDone}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* CheckInDate and CheckOutDate Input */}
            <div className="formChild_3">
                <HotelCalender
                    checkInDate={checkInDate}
                    setCheckInDate={setCheckInDate}
                    checkOutDate={checkOutDate}
                    setCheckOutDate={setCheckOutDate} />
            </div>

            {/* Submit button */}
            <div className="formChild_4">
                <button type="submit">
                    <h4>Search</h4>
                </button>
            </div>
        </div>
    </form>
    )
}

export default HotelForm;