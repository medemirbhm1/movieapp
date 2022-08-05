import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./scss/app.scss"
const App = () => {
  return (
    <div className="app">
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
