import { Rating } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const MovieTrailer = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((el) => el.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>Title: {movie.title}</h1>
      <img src={movie.posterURL} alt="" />
      <p>Description: {movie.description}</p>

      <Rating value={movie.rating} readOnly />
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${movie.trailer}`}
        title="movie-trailer"
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
