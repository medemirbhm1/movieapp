import { Link } from "react-router-dom";
import "./scss/linkimg.scss";
function LinkImg({ e, type }) {
  return (
    <Link
      to={`/details/${type}/${e.id}`}
      className="image"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${e.poster_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    ></Link>
  );
}

export default LinkImg;
