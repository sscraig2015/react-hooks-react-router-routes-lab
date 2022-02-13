import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((film) => 
        <div>
          <h3>Name: {film.title}</h3>
          <p>Time: {film.time}</p>
          <p>Genres:</p>
          <ul>
            {film.genres.map((genre) => {
              return <li>{genre}</li>
            })}
          </ul>
        </div>
        )}
    </div>
  );
}

export default Movies;
