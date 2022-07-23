import React, { useState } from "react";

function Search({ onFilter, listings }) {
  const [search, setSearch] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
  function handleFilter(searchString){
    setSearch(searchString)
    const filteredItems = listings.filter((listing) => listing.description.includes(search))
    onFilter(filteredItems)
    
  }
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => {handleFilter(e.target.value)}}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
