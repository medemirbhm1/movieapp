import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import "./scss/app.scss";
import Details from "./Details";

const App = () => {
  return (
    <div className="app">
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/details/:type/:id" element={<Details />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
