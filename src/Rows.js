import requests from "./requests";
import Row from "./Row";
import "./scss/rows.scss";

function Rows() {
  return (
    <div className="rows">
      <div className="container">
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      </div>
    </div>
  );
}

export default Rows;
