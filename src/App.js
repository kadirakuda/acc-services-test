import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <SearchBar />
    </React.Fragment>
  );
}
export default App;
