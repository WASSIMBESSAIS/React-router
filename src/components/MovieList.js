import React from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./Addmovie";
import { Link } from "react-router-dom";

const MovieList = ({ movies, setMovies, filterTitle, filterRating }) => {
  return (
    <div>
      <div>
        <AddMovie setMovies={setMovies} movies={movies} />
      </div>
      <div className="movielist">
        {movies
          .filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .trim()
                .includes(filterTitle.toLowerCase().trim()) &&
              movie.rating >= filterRating
          )

          .map((movie) => {
            return (
              <Link to={movie.title}>
                <MovieCard movie={movie} key={Math.random()} />;
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MovieList;
