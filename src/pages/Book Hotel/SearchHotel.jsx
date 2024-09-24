import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import HotelForm from "./HotelForm";
import ChevronIcon from "../../assets/Images/ChevronIcon.svg";
import "./SearchHotel.css";

const SearchHotel = () => {
  const [data, setData] = useState(null);
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
  const filteredHotels = data ? data.filter(
    (hotel) => hotel.location_city.toLowerCase().includes(searchQueryLocation.toLowerCase())
  ) : [];

  const [visibleCount, setVisibleCount] = useState(4)

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4)
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
          <button type="submit">FILTERS</button>
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

    </>
  );
};

export default SearchHotel;
