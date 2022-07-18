import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesOnDisplay = movies.map((movie, index) => (
    <div key={index}>
      <h3>Title: {movie.title}</h3>
      <p>Running Time: {movie.time} minutes</p>
      <h4>Genres</h4>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesOnDisplay}
    </div>
  );
}

export default Movies;
