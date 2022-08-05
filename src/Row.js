import axios from "./axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    (async function () {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
    })();
  }, []);
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster`}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
