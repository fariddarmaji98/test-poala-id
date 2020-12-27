import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="box-navbar">
        <Link to="/">
          <label>Rachel Smith</label>
        </Link>
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/resume">RESUME</Link>
          </li>
          <li>
            <Link to="/education">EDUCATION</Link>
          </li>
          <li>
            <Link to="/portofolio">PORTOFOLIO</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
