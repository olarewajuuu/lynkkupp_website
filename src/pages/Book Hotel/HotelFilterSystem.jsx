import { useState } from "react";
import * as Slider from "@radix-ui/react-slider"
import "./HotelFilterSystem.css"
const HotelFilterSystem = ({ setSortBy, setSelectedAmenities, setSelectedRatings }) => {

    const minPrice = 16000
    const [maxPrice, setMaxPrice] = useState([270000]);

    const handleSortClick = (option) => {
        setSortBy(option);
    }
    const handlePriceChange = (newValue) => {
        setMaxPrice(newValue[0]);
    }

    const handleAmenitiesChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedAmenities((prev) => [...prev, value]);
        } else {
            setSelectedAmenities((prev) => prev.filter((amenity) => amenity !== value));
        }
    }
    const handleRatingSelection = (e) => {
        const value = parseInt(e.target.value);
        if (e.target.checked) {
            setSelectedRatings(prev => [...prev, value]);
        } else {
            setSelectedRatings(prev => prev.filter(rating => rating !== value));
        }
    }

    return (
        <div>
            <h3>Sort By:</h3>
            <ul className="sorting-options">
                <li onClick={() => handleSortClick("popular")}>Popular</li>
                <li onClick={() => handleSortClick("highest-price")}>Highest Price</li>
                <li onClick={() => handleSortClick('lowest-price')}>Lowest Price</li>
                <li onClick={() => handleSortClick('user-rating')}>User ratings (Highest first)</li>
            </ul>


            <h2>Filter By:</h2>
            <div>
                <input type="search" placeholder="Hilton Hotel" />
            </div>
            <form>
                <Slider.Root className="SliderRoot" value={[maxPrice]} min={minPrice} max={270000} step={1000} onValueChange={handlePriceChange}>
                    <Slider.Track className="SliderTrack">
                        <Slider.Range className="SliderRange" />
                    </Slider.Track>
                    <Slider.Thumb className="SliderThumb" aria-label="Volume" />
                </Slider.Root>
            </form>
            <div>
                <p>MinPrice: {minPrice}</p>
                <p>MaxPrice: {maxPrice}</p>
            </div>

            <h3>Amenities</h3>
            <form className="amenities-filter">
                <label>
                    <input type="checkbox" value="Air conditioning" onChange={handleAmenitiesChange} />
                    Air conditioning
                </label>
                <label>
                    <input type="checkbox" value="Bar/lounge" onChange={handleAmenitiesChange} />
                    Bar/lounge
                </label>
                <label>
                    <input type="checkbox" value="Security" onChange={handleAmenitiesChange} />
                    Security
                </label>
                <label>
                    <input type="checkbox" value="Kitchen" onChange={handleAmenitiesChange} />
                    Kitchen
                </label>
            </form>
            <h4>Property Rating</h4>
            <form className="rating-filter">
            <label>
                <input type="checkbox" value="2" onChange={e => handleRatingSelection(e)} />
                2 Stars
            </label>
            <label>
                <input type="checkbox" value="3" onChange={e => handleRatingSelection(e)} />
                3 Stars
            </label>
            <label>
                <input type="checkbox" value="4" onChange={e => handleRatingSelection(e)} />
                4 Stars
            </label>
            <label>
                <input type="checkbox" value="5" onChange={e => handleRatingSelection(e)} />
                5 Stars
            </label>
            </form>
        </div>

    )

}
export default HotelFilterSystem;