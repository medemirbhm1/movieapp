import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "./Nav";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./scss/search.scss";
import { useState } from "react";
import axios from "./axios";
import requests from "./requests";
import LinkImg from "./LinkImg";

function Search() {
  const [result, setResult] = useState(null);
  const [query, setQuery] = useState("");
  async function handleSearch(e) {
    e.preventDefault();
    const res = await axios.get(requests.searchMulti + `&query=${query}`);
    setResult(res.data.results);
  }
  return (
    <div className="search">
      <div className="overlay"></div>
      <Nav />
      <div className="container">
        <div className="field" onSubmit={handleSearch}>
          <form>
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              placeholder="Search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="result">
          {result
            ? result.map(
                (e) =>
                  e.poster_path && (
                    <LinkImg key={e.id} e={e} type={e.media_type} />
                  )
              )
            : null}
        </div>
      </div>
    </div>
  );
}

export default Search;
