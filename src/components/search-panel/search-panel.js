import React from "react";

import Filter from "../filter";

import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div className="flex-container">
      <div className="flex-items">
        <h3>Add plan</h3>
        <input type="text" className="input-search" placeholder="Search" />   
      </div>
      <Filter />
    </div>
  );
};

export default SearchPanel;
