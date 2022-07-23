import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  function renderListing(listing){
    return (
      <ListingCard 
        id={listing.id} 
        image={listing.image} 
        description={listing.description} 
        location={listing.location}
        onDelete={onDelete}/>
    )
  }
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => renderListing(listing))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
