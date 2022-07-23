import React from "react";
import Search from "./Search";

function Header({ onFilter, listings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onFilter={onFilter} listings={listings}/>
    </header>
  );
}

export default Header;
