import { useState } from 'react';

const AutoCompleteSearch = () => {
    // Array of objects with name, id, and age
    const people = [
        {
            name: "Murtala Muhammed International Airport",
            location: "Lagos",
            abbrevation: "LOS"
        },
        {
            name: "Nnamdi Azikwe International Airport",
            location: "Abuja",
            abbrevation: "ABV"
        },
        {
            name: "Eboyin state International Airport",
            location: "Eboyin",
            abbrevation: "EBO"
        },
        {
            name: "Anambra International Cargo Airport",
            location: "Anambra",
            abbrevation: "ANA"
        },

    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPeople, setFilteredPeople] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [recentSearches, setRecentSearches] = useState([]);

    // Handle input change and filter suggestions
    const handleInputChange = (event) => {
        const userInput = event.target.value;
        setSearchTerm(userInput);

        // Filter the array of objects based on the search term
        const filtered = people.filter((person) =>
            person.name.toLowerCase().includes(userInput.toLowerCase())
        );

        setFilteredPeople(filtered);
        setShowSuggestions(true);
    };

    // Handle suggestion selection
    const handleSuggestionClick = (person) => {
        setSearchTerm(person.name);
        setShowSuggestions(false);

        // Update recent searches if the person is not already in recentSearches
        setRecentSearches((prevSearches) => {
            const isAlreadyInSearches = prevSearches.some(
                (search) => search.name === person.name
            );

            if (!isAlreadyInSearches) {
                // Add new search at the top and limit to two recent searches
                const updatedSearches = [person, ...prevSearches];
                return updatedSearches.slice(0, 2); // Keep only the 2 most recent searches
            }

            return prevSearches;
        });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="City or airport"
                value={searchTerm}
                onChange={handleInputChange}
                className='outline-none w-[250px]'
            />

            {/* Render the list of filtered suggestions */}
            {showSuggestions && searchTerm && (
                <div className='absolute top-[70px] left-[0px] md:top-[550px] md:left-[320px] bg-white z-30 w-[312px]'>

                    <h3 className='text-[13px] bg-[#55BFEA] font-[700] text-white px-4 py-[2px]'>RECENT SEARCHES</h3>
                    {recentSearches.length > 0 && (
                        <div className='mx-4 my-2'>
                            {recentSearches.map((person, index) => (
                                <div key={index} className='border-b-[1px] border-solid border-[#23222259] py-1'>
                                    <div className='flex justify-between text-[13px]'>
                                    <span > {person.name}  </span> 
                                    <span>{person.abbrevation}</span>
                                    </div>
                                    <p className='text-[13px] text-[#23222259]'>{person.location}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* <div>MAIN SEARCHES</p></div> */}
                    <h3 className='text-[13px] bg-[#55BFEA] font-[700] text-white px-4 py-[2px]'>CITIES AND AIRPORTS</h3>
                    <div className='mx-4 my-2'>

                    {filteredPeople.length > 0 ? (
                        filteredPeople.map((person, index) => (
                            <div key={index} onClick={() => handleSuggestionClick(person)}>
                                <div key={index} className='border-b-[1px] border-solid border-[#23222259]  py-1'>
                                    <div className='flex justify-between text-[13px]'>
                                    <span > {person.name}  </span> 
                                    <span>{person.abbrevation}</span>
                                    </div>
                                    <p className='text-[13px] text-[#23222259]'>{person.location}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <li>No suggestions available</li>
                    )}
                    </div>
                </div>
            )}

            {/* Render a div showing recent searches */}
            {/* {recentSearches.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Recent Searches:</h3>
          {recentSearches.map((person, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p><strong>Name:</strong> {person.name}</p>
            </div>
          ))}
        </div>
      )} */}

        </div>
    );
};

export default AutoCompleteSearch;
