import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../component";
// import axios from "../../services/axios";
import axios from "axios";
import "./Movie.css";

const MovieDetails = () => {
  const { movieid } = useParams();
  const Api_Key = process.env.REACT_APP_API_KEY;
  const [movie, setMovie] = useState(null);


  const Truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // const response = await axios.get(`movie/${movieid}?api_key=${Api_Key}`);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieid}?api_key=${Api_Key}`
        );
        setMovie(response.data);
        console.log(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchMovieDetails();
  }, [movieid]);

  return (
    <section
      className=" movie__wrapper"
      style={{
        backgroundImage:
          `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")` ||
          `url("https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/netflix.svg")`,
      }}
    >
      <Navbar />
      <section className="movie__details">
        <section className="movie__content">
          <h2>Titile: {movie?.title}</h2>
          <h3>Release Date: {movie?.release_date}</h3>
          <>
            <h3 className="rate">Rating:</h3>
            <h3 className="votes__container">
              <p className="votes">
                <span className="votes__whirl">{movie?.vote_average}</span>
              </p>
            </h3>
          </>

          <section className="genre">
            <h3>Genre:</h3>
            <ul>
              {movie?.genres?.map((genre) => (
                <li key={genre.iso_639_1}>{genre.name}</li>
              ))}
            </ul>
          </section>

          <h4 className="overview">{Truncate(movie?.overview, 350)}</h4>
          <h4 className="lang">
            Language:
            <ul>
              {movie?.spoken_languages.map((language) => (
                <li key={language?.iso_639_1}>{language?.english_name}</li>
              ))}
            </ul>
          </h4>
          <h4 className="">
            Subtitles:
            <ul className="sub">
              {movie?.spoken_languages.map((language) => (
                <li key={language?.iso_639_1}>({language?.name})</li>
              ))}
            </ul>
          </h4>
          <ul className="cast__list">
            {movie?.credits?.cast.map((actor) => (
              <li key={actor?.id} className="cast__item">
                <img
                  src={`https://image.tmdb.org/t/p/w185/${actor?.profile_path}`}
                  alt={actor?.name}
                  className="cast__image"
                />
                <div className="cast__info">
                  <h4>{actor?.name}</h4>
                  <p>{actor?.character}</p>
                </div>
              </li>
            ))}
          </ul>
        
        </section>
      </section>
      <section className="overlay"/>
    </section>
  );
};

export default MovieDetails;
