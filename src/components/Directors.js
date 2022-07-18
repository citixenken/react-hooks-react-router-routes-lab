import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsDisplayed = directors.map((director, index) => (
    <div key={index}>
      <h3>{director.name}</h3>
      <h4>Movies directed: </h4>
      <ul>
        {director.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDisplayed}
    </div>
  );
}

export default Directors;
