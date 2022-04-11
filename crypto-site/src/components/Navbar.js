import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      Group 
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/Home">
            Home 
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Charts">
            Charts
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Data">
            Data
          </a>
        </li>
      </ul>
    </div>
  </nav>
  );
}
export default Navbar;