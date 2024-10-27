// import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import eventsData from './eventsData';
import backImg from "/images/back.svg"
// import { useNavigate } from "react-router-dom";
// import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const EventDetails = () => {
    // const navigate = useNavigate();
    const { eventId } = useParams();
    const event = eventsData.find((event) => event.id === parseInt(eventId));
    const [showBookingSummary, setShowBookingSummary] = useState(false);
    const [quantity, setQuantity] = useState(1);

    if (!event) return <p>Event not found!</p>;

    const handlePurchaseClick = () => setShowBookingSummary(true);
    const handleCloseSummary = () => setShowBookingSummary(false);

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
    const totalPrice = (event.price * quantity).toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
    });


    return (
        <div className="mx-auto py-8">
            <div className="bg-white overflow-hidden">
                {/* Event Image */}
                <img src={event.imageUrl} alt={event.name} className="w-full md:h-96 object-cover" />

                {/* Event Details */}
                <div className={`p-5 md:p-10 md:flex justify-between items-start relative  ${showBookingSummary ? "hidden md:block" : ""}`}>
                    <div>
                        <h1 className=" text-[19px] md:text-[48px] font-bold mb-4">{event.name}</h1>
                        <img src={event.imageUrl} alt={event.name} className="w-full md:w-2/4 md:h-96 object-cover rounded-xl" />
                        <div className="md:flex items-start gap-52">
                            <div className="text-[#494949] mb-4">
                                <h2 className="text-[19px] md:text-[33px] font-semibold mt-6 mb-4 ">Date and time</h2>
                                <div className="flex items-center gap-2 md:gap-4 text-gray-500 mb-4">
                                    <img src={event.dateUrl} alt="" />
                                    <span className="text-[15px] md:text-[19px]">{event.date}</span> <span className="text-[15px] md:text-[19px]">{event.time}</span>
                                </div>
                            </div>

                            <div className="text-[#494949] mb-4">
                                <h2 className="text-[19px] md:text-[33px] font-semibold mt-6 mb-4 ">Location</h2>
                                <div>
                                    <div className="flex items-center gap-4">
                                        <img src={event.locationUrl} alt="" />
                                        <span className="text-[16px] md:text-[19px]">{event.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* About the Event */}
                        <div className="my-10">
                            <h2 className="text-[19px] md:text-[33px] font-semibold mt-6 mb-4 text-[#494949]">About the Event</h2>
                            <p className="text-[#494949] text-[16px] md:text-[19px] mb-4">{event.description}</p>
                        </div>

                        {/* Tags */}
                        <div className="mb-6">
                            <h3 className="text-[19px] md:text-[33px] font-semibold mt-6 mb-4 text-[#494949]">Tags</h3>
                            <div className="flex flex-wrap gap-8 md:w-2/3">
                                {event.tags.map((tag, index) => (
                                    <span key={index} className="px-6 text-[11px] md:text-[16px]  py-2 bg-gray-200 rounded-full text-gray-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Ticket Section */}
                    {!showBookingSummary && (
                        <div className="mt-8 md:w-1/3 h-96 object-cover rounded-xl">
                            <h2 className="text-[19px] md:text-[33px] mb-16 border-b-2 text-[#494949]">Select Ticket</h2>
                            <div className="flex flex-col items-center justify-center border p-6 rounded-md mb-4">
                                {/* <span className="text-lg">General Admission</span> */}
                                <span className="text-[28px] font-bold text-[#494949] text-center">{event.price.toLocaleString("en-NG", {
                                    style: "currency",
                                    currency: "NGN",
                                })}</span>
                                <button onClick={handlePurchaseClick} className="w-full p-4 bg-[#55BFEA] text-white rounded-md mt-4 text-[19px]">
                                    Get ticket
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                {/* flex flex-col items-center justify-center */}

                {/* Booking Summary Modal */}
                {showBookingSummary && (
                    <div className=" inset-0 flex flex-col items-center justify-center md:justify-end  md:absolute md:top-[50rem] md:mr-16">
                        <div className="mt-16 mb-8 relative -left-32">
                            <button
                                onClick={handleCloseSummary}
                                className="ml-10 px-4 py-2 bg-[#55BFEA] text-white md:hidden flex justify-center items-center gap-2 "
                            >
                                <img src={backImg} alt="" className="w-[25px]" />Go back
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg w-11/12 md:w-full  max-w-md border mt- md:mt-0">
                            <div className="flex items-center gap-4 justify-center mb-10 mt-5 border-b pb-2">
                                <img src={event.dateUrl} alt="" className="w-[25px]" />
                                <h2 className="text-[23px] md:text-[33px] font-semibold md:font-bold text-[#494949]"> Booking Summary</h2>
                            </div>

                            {/* Event Details */}
                            <div className="my-5">
                                <h3 className=" text-[16px] md:text-[19px] text-[#494949] font-semibold mb-5">{event.name}</h3>
                                <div className="flex items-center justify-between mb-10">
                                    <span className="text-[16px]">Price</span>
                                    <p className="text-gray-600  text-[16px]"> {event.price.toLocaleString("en-NG", {
                                        style: "currency",
                                        currency: "NGN",
                                    })}</p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-4 ">
                                        <button
                                            onClick={handleDecrement}
                                            className={`px-4 py-1 md:text-lg rounded-full  ${quantity === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed border border-[#494949] " : "bg-gray-200 border border-[#55BFEA]"
                                                }`}
                                            disabled={quantity === 1}
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-semibold">{quantity}</span>
                                        <button
                                            onClick={handleIncrement}
                                            className="px-3 py-1 md:text-lg bg-gray-200 rounded-full border border-[#55BFEA]"
                                        >
                                            +
                                        </button>
                                    </div>

                                </div>
                            </div>


                            <div className="text-[16px] mb-6 flex items-center justify-between">
                                <span>Total</span>
                                <span>{totalPrice}</span>
                            </div>

                            {/* Checkout and Close Buttons */}
                            <button
                                onClick={() => alert("Proceeding to checkout")}
                                className="w-full p-4 bg-[#55BFEA] text-white rounded-md mt-4 text-[19px]"
                            >
                                Checkout
                            </button>

                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default EventDetails;
