import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import HotelForm from "./HotelForm";
import HotelFilterSystem from "./HotelFilterSystem";
import ChevronIcon from "../../assets/Images/ChevronIcon.svg";
import "./SearchHotel.css";

const SearchHotel = () => {
  const [data, setData] = useState(null);
  const [showFilter, setShowFilter] = useState(false)
  const [sortBy, setSortBy] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([])
  const location = useLocation();
  const searchQuery = location.state?.searchData || "";
  const searchQueryLocation = searchQuery.cityOrAirport

  useEffect(() => {
    fetch("/SearchHotelResult.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter the JSON data based on the search query
  let filteredHotels = data ? data.filter(
    (hotel) => hotel.location_city.toLowerCase().includes(searchQueryLocation.toLowerCase())
  ) : [];


  // Apply sort by filter
  if (sortBy) {
    switch (sortBy) {
      case "popular":
        filteredHotels.sort((a, b) => (b.number_of_reviews - a.number_of_reviews))
        break;
      case "highest-price":
        filteredHotels.sort((a, b) => (b.price - a.price));
        break;
      case "lowest-price":
        filteredHotels.sort((a, b) => (a.price - b.price));
        break;
      case "user-rating":
        filteredHotels.sort((a, b) => (b.number_of_reviews - a.number_of_reviews))
        break;
      default:
        break;
    }
  }
  // Apply amenities filter if there are selected amenities
  if (selectedAmenities.length > 0) {
    filteredHotels = filteredHotels.filter(hotel =>
      // Only include hotels that have amenities and match all selected amenities
      hotel.amenities.length > 0 && selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
    );
  }

  // Apply rating filter
  if (selectedRatings.length > 0) {
    filteredHotels = filteredHotels.filter(hotel => selectedRatings.includes(parseInt(hotel.ratings.split("/")[0]))
    )
  }


  const [visibleCount, setVisibleCount] = useState(4)

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4)
  }
  const toggleFilter = () => {
    setShowFilter((prev) => {
      const newShowFilter = !prev;

      // document.body.style.overflow = newShowFilter ? "hidden" : "auto";
      return newShowFilter;
    })
  }

  return (
    <>
      <nav className="searchNav">
        {/*Home navigation panel*/}
        <div className="searchNav_1">
          <span>
            <a href="/">Home</a>
          </span>
          <img src={ChevronIcon} />
          <span>
            <a href="/">Hotels in Lagos</a>
          </span>
        </div>
        {/*Filter button */}
        <div className="searchNav_2">
          <button type="submit" onClick={toggleFilter}>FILTERS</button>
        </div>

        <div className="searchNav_3">
          <HotelForm />
        </div>
      </nav>
      <section className="searchResult">
        <div className="searchResult_1">
          <div className="searchResult_1_child">
            <button type="submit">
              {" "}
              <img src="../src/assets/Images/ep_back.svg" /> Go back
            </button>
            <p>Hotels in Lekki, NG</p>
          </div>
          <img className="contact" src="../src/assets/Images/contact.svg" />
        </div>
        <div className="searchResult_2">
          {filteredHotels.slice(0, visibleCount).map(item => (
            <div className="searchResult_2_child" key={item.id}>
              <div className="hotel_img">
                <img src={item.hotel_image} />
              </div>
              <div className="hotel_description">
                <span>
                  {item.hotel_name}
                </span>
                <div className="hotel_description_child">
                  <div className="hotel_description_child_1">
                    <p>{item.ratings}</p>
                    <p>{item.comment}</p>
                    <p>( {item.number_of_reviews} reviews)</p>
                  </div>
                  <div className="hotel_description_child_2">
                    <img src="../src/assets/Images/location_icon.svg" />
                    <p>{item.hotel_address}</p>
                  </div>
                </div>
              </div>
              <div className="hotel_details">
                <div>
                  <ul>
                    {item.amenities.map((amenity, index) => (
                      <li key={index}>
                        <img src="../src/assets/Images/check_icon.svg" /> {amenity}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span>
                    <img src="../src/assets/Images/naira_icon.svg" alt="" />
                    {item.price}
                  </span>
                  <span>
                    (includes taxes and charges) <br /> per room, per night
                  </span>
                  <button type="submit">Select room</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredHotels.length > visibleCount && (
          <div className="searchResult_3">
            <button onClick={handleShowMore} type="submit">
              Show more results
            </button>
          </div>
        )}
      </section>

      {showFilter && 
      <HotelFilterSystem
        setSortBy={setSortBy}
        setSelectedAmenities={setSelectedAmenities}
        setSelectedRatings={setSelectedRatings}
      />}

    </>
  );
};

export default SearchHotel;
