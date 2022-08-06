import axios from "./axios";
import React, { useEffect, useState } from "react";
import LinkImg from "./LinkImg";

const Row = ({ title, fetchUrl, ofTv = false }) => {
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
        {movies?.map((e) => (
          <LinkImg key={e.id} e={e} type={ofTv ? "tv" : "movie"} />
        ))}
      </div>
    </div>
  );
};

export default Row;
