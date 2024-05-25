import React, { useState } from 'react';



const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
      };
    return (
        <div className="search-bar">
            <form className="search-form d-flex align-items-center">
                <input type="text" name="query" placeholder="Search" value={query} onChange={handleInputChange} title="Enter search keyword" />
                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
            </form>
        </div>
    );
};

export default SearchBar;