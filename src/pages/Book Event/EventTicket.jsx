import { useState } from "react";
import eventsData from './eventsData';
import locationImg from "/images/location.svg"
import filterClose from "/images/filterclose.svg"



const EventTicket = () => {

    const [filter, setFilter] = useState("All events");
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [visibleEvents, setVisibleEvents] = useState(6);
    const [searchTriggered, setSearchTriggered] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Get today's date in YYYY-MM-DD format
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const todayDate = getTodayDate();

    // Function to calculate the dates for the upcoming Saturday and Sunday
    const getWeekendDates = () => {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
        const saturdayOffset = 6 - dayOfWeek; // Days until next Saturday
        const sundayOffset = saturdayOffset + 1;

        const saturday = new Date();
        saturday.setDate(today.getDate() + saturdayOffset);
        const sunday = new Date();
        sunday.setDate(today.getDate() + sundayOffset);

        return { saturday, sunday };
    };

    const { saturday, sunday } = getWeekendDates();


    // Filter events based on selected filter criteria
    const filteredEvents = eventsData

        .filter((event) => {
            const eventDate = new Date(event.date);

            if (filter === "All events") return true;
            if (filter === "Free") return event.free;
            if (filter === "Today") {
                // Check if event date matches today's date
                return event.date === todayDate;
            }
            if (filter === "This Weekend") {
                // Check if event date falls between Saturday and Sunday
                return eventDate >= saturday && eventDate <= sunday;
            }
            return event.category === filter;
        })
        .filter((event) => {
            if (!searchTriggered) return true; // Show all until search is triggered
            return (
                event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (!location || event.location.toLowerCase().includes(location.toLowerCase()))
            );
        });


    // Handle showing more events
    const showMoreEvents = () => {
        setVisibleEvents((prev) => prev + 6); // Load 6 more events each time
    };

    const handleSearchClick = () => {
        setSearchTriggered(true);
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleFilterClick = (category) => {
        setFilter(category);
        setIsSidebarOpen(false); // Close sidebar on filter selection
    };

    return (
        <div className="relative">
            <div className="relative">
                {/* Sidebar for Mobile Filter */}
                <div
                    className={`z-30 fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
                <div
                    className={`z-30 fixed top-0 right-0 h-full bg-[#EFEFEF] w-64 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                        } md:hidden`}
                >
                    <div className="p-6 bg-[#ffF] shadow-md">
                        <img src={filterClose} alt=""  onClick={() => setIsSidebarOpen(false)} />
                    </div>
                    <div className="p-12 mt">
                        <h3 className="text-lg font-semibold mb-4">SORT BY:</h3>
                        {["All events", "Today", "This Weekend", "Online", "Free"].map((category) => (
                            <button
                                key={category}
                                onClick={() => handleFilterClick(category)}
                                className={`block text-left px-0 mb-4 ${filter === category ? "border-b-2 border-[#55BFEA] text-[#55BFEA] text-[16px] font-bold" : "bg-transparent text-[#23222259]"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filter Button - Visible Only on Mobile */}

            </div>
            {/* Search Section */}
            <div className="md:bg-[#55BFEA] py-6 absolute top-48 md:relative md:top-0 z-10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4">
                    <div className="flex w-full justify-center items-center gap-4 md:gap-14">
                        <input
                            type="text"
                            placeholder="Conference"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-5 py-2 border rounded-md w-full md:w-1/2"
                        />
                        {/* <div className="h-full w-[2px] bg-white text-transparent">4</div> */}

                        <div className="flex items-center bg-[#fff] rounded-md w-full md:w-1/3 px-5 py-[5px]">
                            <img src={locationImg} alt="" className="mr-2" />
                            <select
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full py-2 bg-transparent outline-none"
                            >
                                <option value="Lagos">Lagos</option>
                                <option value="Maduguri">Maduguri</option>
                                <option value="Ilorin">Ilorin</option>
                                <option value="Kano">Kano</option>
                                <option value="Port Hacourt">Port Hacourt</option>
                                <option value="Enugu">Enugu</option>
                                <option value="Ibadan">Ibadan</option>
                                <option value="Benin">Benin</option>
                                <option value="Zaria">Zaria</option>
                                <option value="Kaduna">Kaduna</option>
                            </select>
                        </div>
                        {/* <div className="h-full w-[2px] bg-white"></div> */}
                    </div>
                    <button
                        onClick={handleSearchClick}
                        className="px-0 py-2 bg-transparent border-2 border-[#fff] text-white rounded-md w-full md:w-1/2"
                    >
                        Search
                    </button>
                </div>
            </div>


            {/* Hero Section */}
            <section
                className="relative h-96 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/ticketHero.svg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className=" text-[19px] md:text-[48px] font-bold">Your Event Booking Journey Starts Here</h1>
                    <p className="mt-4 text-[14px] md:text-[28px] mb-28 md:mb-0">connect, discover, and create unforgettable experience with ease</p>
                </div>
            </section>

            {/* Filter Options */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <h4 className=" text-[16px] md:text-[28px] font-bold text-[#494949] md:my-10 ">Conference events in Lagos, NG</h4>
                    <button
                        onClick={toggleSidebar}
                        className="px-4 py-1 bg-white text-[#55BFEA] border-2 border-[#55BFEA] rounded-lg md:hidden z-10"
                    >
                        Filter
                    </button>
                </div>

                <div className="md:flex justify-start items-center gap-4 hidden">
                    <span className="text-[23px] font-bold text-[#494949]">Sort by:</span>
                    {["All events", "Today", "This Weekend", "Online", "Free"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2  ${filter === category ? "border-b-4 border-[#55BFEA] text-[#55BFEA] text-[23px] font-bold" : "text-[23px] font-bold text-[#494949]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Events List */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
                {filteredEvents.slice(0, visibleEvents).map((event) => (
                    <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={event.imageUrl} alt={event.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{event.name}</h3>
                            <div className="flex items-center text-gray-500 mt-2">
                                <span className="flex justify-start items-center gap-4 mb-3"><img src={event.dateUrl} alt="" /> {event.date}</span>
                            </div>
                            <div className="flex items-center text-gray-500 mt-2">
                                <span className="flex justify-start items-center gap-4 mb-3"><img src={event.timeUrl} alt="" />{event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-500 mt-2">
                                <span className="flex justify-start items-center gap-4 mb-3"><img src={event.locationUrl} alt="" />{event.location}</span>
                            </div>
                            <div className="flex items-center justify-between text-gray-500 my-2">
                                <button className="bg-[#55BFEA] py-2 px-4 text-white rounded-md">Get ticket</button>
                                <span>{event.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* Show More Button */}
            {visibleEvents < filteredEvents.length && (
                <div className="flex justify-center py-6">
                    <button
                        onClick={showMoreEvents}
                        className="container mx-auto px-0 py-2 bg-transparent border-2 border-[#55BFEA] w-full text-[#55BFEA] rounded-md"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    )
}

export default EventTicket