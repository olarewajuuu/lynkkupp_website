import "./SortFilter.css"


const SortFilter = ({filteredHotels, setFilteredHotels}) => {

    const handleSortClick = (option) => {
        
        let sortedHotels = [...filteredHotels];
        
        switch (option) {
            case "popular":
                sortedHotels = sortedHotels.sort((a, b) => (b.number_of_reviews - a.number_of_reviews))
                break;
            case "highest-price":
                sortedHotels = sortedHotels.sort((a, b) => (b.price - a.price));
                break;
            case "lowest-price":
                sortedHotels = sortedHotels.sort((a, b) => (a.price - b.price));
                break;
            case "user-rating":
                sortedHotels = sortedHotels.sort((a, b) => (b.number_of_reviews - a.number_of_reviews))
                break;
            default:
                break;
        }

        setFilteredHotels(sortedHotels);
    }

    return (
        <>
            <div className="sort-filter">
                <h2>SORT BY:</h2>
                <ul className="sorting-options">
                    <li onClick={() => handleSortClick("popular")}><p>Popular</p></li>
                    <li onClick={() => handleSortClick("highest-price")}><p>Highest Price</p></li>
                    <li onClick={() => handleSortClick('lowest-price')}><p>Lowest Price</p></li>
                    <li onClick={() => handleSortClick('user-rating')}><p>User ratings ( Highest first )</p></li>
                </ul>
            </div>
        </>
    )
}
export default SortFilter;