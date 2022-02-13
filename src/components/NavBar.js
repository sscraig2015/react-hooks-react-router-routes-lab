import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


function NavBar() {
  return ( 
    <ul>
      <li>
        <NavLink
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/directors"
        >
          Directors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/actors"
        >
          Actors
        </NavLink>
      </li>
    </ul>
  )  
}

export default NavBar;
