import axios from "./axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import "./scss/details.scss";

function Details() {
  const { type, id } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`/${type}/${id}?api_key=36213a2163c7dbc6ad1ceabef8e337cc`)
      .then((r) => {
        setDetails(r.data);
      });
  }, []);
  return details ? (
    <div
      className="details"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${details.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="gradient"></div>
      <Nav />
      <div className="container">
        <div className="text">
          <h1>{details.name || details.title}</h1>
          <div className="genres">
            {details.genres.map(({ id, name }) => (
              <span className="genre" key={id}>
                {name}
              </span>
            ))}
          </div>
          <div className="info">
            <span className="rate">
              {Number(details.vote_average).toFixed(1)}
            </span>
            <span className="lan">{details.original_language}</span>
            <span>{details.first_air_date || details.release_date}</span>
            {details.number_of_seasons ? (
              <span>
                {details.number_of_seasons}
                {details.number_of_seasons > 1 ? " seasons" : " season"}
              </span>
            ) : null}
          </div>
          <p className="overview">{details.overview}</p>
        </div>
        {details.seasons ? (
          <div className="sec">
            <h2>Seasons : </h2>
            <div className="row">
              {details.seasons.map(({ id, poster_path, name, air_date }) => (
                <div
                  key={id}
                  className="image"
                  style={{
                    bb2AUlX5ZGvNJDQxHlly1cnQ64fM2ackgroundImage: `url("https://image.tmdb.org/t/p/original/${poster_path}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <div className="info">
                    <h3>{name}</h3>
                    <span className="airdate">{air_date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) : null;
}

export default Details;
