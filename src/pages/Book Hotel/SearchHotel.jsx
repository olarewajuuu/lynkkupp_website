import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import useScreenSize from "./useScreenSize"
import HotelForm from "./HotelForm";
import HotelPagesOption from "./HotelPagesOption"
import HotelFilterSystem from "./HotelFilterSystem";
import SortFilter from "./SortFilter";
import ChevronIcon from "../../assets/Images/ChevronIcon.svg";
import "./SearchHotel.css";

const SearchHotel = () => {
  const [data, setData] = useState(null);
  const [filteredHotels, setFilteredHotels] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([])
  const location = useLocation();
  const searchQuery = location.state?.searchData || "";
  const searchQueryLocation = searchQuery.cityOrAirport
  const isLargeScreen = useScreenSize()


  useEffect(() => {
    fetch("/SearchHotelResult.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (data) {
      // Filter the JSON data based on the search query
      let Hotels = data.filter(
        (hotel) => hotel.location_city.toLowerCase().includes(searchQueryLocation.toLowerCase())
      );
      // Apply amenities filter if there are selected amenities
      if (selectedAmenities.length > 0) {
        Hotels = Hotels.filter(hotel =>
          // Only include hotels that have amenities and match all selected amenities
          hotel.amenities.length > 0 && selectedAmenities.every(amenity => hotel.amenities.includes(amenity))
        );
      }
      // Apply rating filter
      if (selectedRatings.length > 0) {
        Hotels = Hotels.filter(hotel => selectedRatings.includes(parseInt(hotel.ratings.split("/")[0]))
        )
      }

      //Update the filtered hotels state
      setFilteredHotels(Hotels);
    }
  }, [data, searchQueryLocation, selectedAmenities, selectedRatings]);

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
  const getImageSrc = (imagePath) => {
    return isLargeScreen ? imagePath.replace(/\/(\w+)\./, '/sm-$1.') : imagePath
  }
  const hotel_description = (item) => {
    if (isLargeScreen) {
      return (
        <div className="hotel_description">
          <span>
            {item.hotel_name}
          </span>
          <div className="hotel_description_child">
            <div className="hotel_description_child_1">
              <img src="../src/assets/Images/location_icon.svg" />
              <p>{item.hotel_address}</p>
            </div>
            <div className="hotel_description_child_2">
              <p>{item.ratings}</p>
              <p>{item.comment}</p>
              <p>( {item.number_of_reviews} reviews)</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
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
      )
    }
  }
  const hotel_details = (item) => {
    if (isLargeScreen) {
      return (
        <>
          <div className="hotel_amenities">
            <ul>
              {item.amenities.map((amenity, index) => (
                <li key={index}>
                  <img src="../src/assets/Images/check_icon.svg" /> {amenity}</li>
              ))}
            </ul>
          </div>
          <div className="hotel_price">
            <span>
              &#8358;{item.price}
            </span>
            <span>
              (includes taxes and charges) <br /> per room, per night
            </span>
            <button type="submit">Select room</button>
          </div>
        </>
      )

    } else {
      return (
        <>
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
                &#8358;{item.price}
              </span>
              <span>
                (includes taxes and charges) <br /> per room, per night
              </span>
              <button type="submit">Select room</button>
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className="searchResultPage">
        <nav className="searchNav">
          {/*Home navigation panel*/}
          <div className="searchNav_1">
            <span>
              <a href="/">Home</a>
            </span>
            <img src={ChevronIcon} />
            <span>
              <a href="/">Hotels in {searchQuery.cityOrAirport}</a>
            </span>
          </div>
          {/*Filter button */}
          <div className="searchNav_2">
            <button type="submit" onClick={toggleFilter}>FILTERS</button>
          </div>

          <div className="searchNav_3">
            <HotelForm  searchQuery={searchQuery}/>
          </div>
        </nav>
        <section className="searchResult">
          {/* Shows the current page in the hotel pages*/}
          {isLargeScreen && <HotelPagesOption />}
          <div className="searchResult_1">
            <div className="searchResult_1_child">
              <button type="submit">
                {" "}
                <img src="../src/assets/Images/ep_back.svg" /> Go back
              </button>
              <p>Hotels in {searchQuery.cityOrAirport}</p>
            </div>
            <img className="contact" src="../src/assets/Images/contact.svg" />
          </div>
          <div className="searchResult_2">
            {isLargeScreen &&
              <div className="searchResultNav">
                <span>
                  <a href="/">Home</a>
                </span>
                <img src={ChevronIcon} />
                <span>
                  <a href="/">Hotels in Lagos</a>
                </span>
              </div>}
            <div className="sortByFilter">
              {isLargeScreen && <SortFilter filteredHotels={filteredHotels} setFilteredHotels={setFilteredHotels} />}
            </div>
            {filteredHotels.slice(0, visibleCount).map(item => (
              <div className="searchResult_2_child" key={item.id}>
                <div className="hotel_img">
                  <img src={getImageSrc(item.hotel_image)} alt={item.hotel_image} />
                </div>
                {/* hotel description component */}
                <>
                  {hotel_description(item)}
                </>
                {/* hotel details component */}
                <>
                  {hotel_details(item)}
                </>
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
        <div className="filter-panel">
          {(showFilter || isLargeScreen) &&
            <HotelFilterSystem
              filteredHotels={filteredHotels}
              setFilteredHotels={setFilteredHotels}
              setShowFilter={setShowFilter}
              setSelectedAmenities={setSelectedAmenities}
              setSelectedRatings={setSelectedRatings}
            />}
        </div>
      </div>
    </>
  );
};

export default SearchHotel;
