import React from "react";
import { Provider } from "react-redux";


import Header from "../header";
import SearchPanel from "../search-panel/search-panel";
import ToDoList from "../to-do-list";

import "./app.css";

const App = () => {
  return (
    <div className="app-class">
      <div className="app-center">
     
        <Header />
        <SearchPanel />
        <ToDoList />
      
      </div>
    </div>
  );
};

export default App;
