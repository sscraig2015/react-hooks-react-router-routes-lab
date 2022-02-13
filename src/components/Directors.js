import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Director's Page</h1>
      
      {directors.map((director) => {
        return (
          <div>
            <h3>Name: {director.name}</h3>
            <p>Movies:</p>
            <ul>
                {director.movies.map((film) => {
                  return <li>{film}</li>
              })}
            </ul>
          </div>
        )
      })}
            
    </div>
  
  )    
}
export default Directors;
