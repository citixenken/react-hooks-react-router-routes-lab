import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsDisplayed = actors.map((actor, index) => (
    <div key={index}>
      <h3>{actor.name}</h3>
      <h4>List of Movies</h4>
      <ul>
        {actor.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDisplayed}
    </div>
  );
}

export default Actors;
