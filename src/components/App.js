import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])
  function handleFilter(filteredItems) {
    setListings(filteredItems)
  }
  function handleDelete(id) {
    const updatedListings = listings.filter(listing => listing.id !== id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(setListings(updatedListings))
  }
  return (
    <div className="app">
      <Header onFilter={handleFilter} listings={listings}/>
      <ListingsContainer listings={listings} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
