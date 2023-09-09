import { useEffect, useState } from "react";
import axios from "../../services/axios";

import "./Banner.css";
import request from "../../services/request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(request.fetchNetflixOriginals);
        setMovie(
          res?.data?.results[
            Math.floor(Math.random() * res?.data?.results.length - 1)
          ]
        );
        return res;
        console.log(movie);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const Truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  };
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <section className="banner__contents">
          <h2 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h2>
          <section className="banner__btns">
            <button className="banner__btn">Play</button>
            <button className="banner__btn">My List</button>
          </section>
          <h2 className="banner__description">
            {Truncate(movie?.overview, 100)}
          </h2>
          <section className="banner--fade-btn" />
        </section>
      </header>
    </>
  );
};

export default Banner;
