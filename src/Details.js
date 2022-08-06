import axios from "./axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

function Details() {
  const { type, id } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    axios
      .get(`/${type}/${id}?api_key=36213a2163c7dbc6ad1ceabef8e337cc`)
      .then((r) => {
        console.log(r.data);
      });
  }, []);
  return (
    <div className="details">
      <Nav />
    </div>
  );
}

export default Details;
