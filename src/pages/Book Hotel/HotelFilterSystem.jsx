import { useState } from "react";
import * as Slider from "@radix-ui/react-slider"
import "./HotelFilterSystem.css"
const HotelFilterSystem = ({ setSortBy }) => {

    const minPrice = 16000
    const [maxPrice, setMaxPrice] = useState([270000]);

    const handleSortClick = (option) => {
        setSortBy(option);
    }
    const handlePriceChange = (newValue) => {
        setMaxPrice(newValue[0]);
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
        </div>

    )

}
export default HotelFilterSystem;