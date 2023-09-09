import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../services/axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_Url = "https://image.tmdb.org/t/p/original/";

  // Use useNavigate to get the navigation function
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <section className="row">
      <h2>{title}</h2>
      <section className="row__posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              // Use navigate to programmatically navigate to the movie details page
              <section
                key={movie.id}
                className="movie__link"
                onClick={() => navigate(`/movie/${movie.id}`)} // Use the movie ID in the URL
              >
                <img
                  src={`${base_Url}${
                    isLargeRow ? movie?.poster_path : movie.backdrop_path
                  }`}
                  className={`row__poster ${isLargeRow && "row__posterlarge"}`}
                  alt={movie.name}
                  loading="lazy"
                />
              </section>
            )
        )}
      </section>
    </section>
  );
};

export default Row;
