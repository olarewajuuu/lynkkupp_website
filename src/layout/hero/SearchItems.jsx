
import { useState } from "react";
import "./SearchItems.css"


const SearchItems = ({data}) => {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
          return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
      };

      // const click = ()=>{
      //   alert(wordEntered)
      // }

  return (
    <div>
        <input
            type="search"
            placeholder="City or airport"
            className="ml-7"
            value={wordEntered}
            onChange={handleFilter}
            />

            {filteredData.length != 0 && (
                <div className="dataResult">
                {data.map((filteredData, key) => {
                  return (
                      <p className="dataItem" onClick={(e)=>{alert(filteredData.name)}}>{filteredData.name}</p>
                  );
                })}
              </div>
            )}
    </div>
  )
}

export default SearchItems