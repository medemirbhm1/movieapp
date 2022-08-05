import React from "react";
import { Link } from "react-router-dom";
import "./scss/nav.scss";
import logo from "./Filmat .svg";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Nav;
