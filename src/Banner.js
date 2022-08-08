import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "./axios";
import requests from "./requests";
import "./scss/banner.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function truncate(str) {
  return str.length > 150 ? str.substr(0, 149) + "..." : str;
}
const Banner = () => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    (async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    })();
  }, []);
  return movie ? (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="vertical_gradient"></div>
      <div className="horizontal_gradient"></div>
      <div className="container">
        <h1>{movie.title || movie.name || movie.original_name}</h1>
        <div className="gen_info">
          <span className="lan">{movie.original_language}</span>
          <span className="year">{movie.first_air_date.slice(0, 4)}</span>
        </div>
        <p className="desc">{truncate(movie?.overview)}</p>
        <Link to={`/details/tv/${movie.id}`}>
          <button className="btn">
            <FontAwesomeIcon icon={faPlus} /> More
          </button>
        </Link>
      </div>
    </div>
  ) : null;
};

export default Banner;
