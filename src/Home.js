import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";
import Rows from "./Rows";
import "./scss/home.scss";
const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Banner />
      <Rows />
    </div>
  );
};

export default Home;
