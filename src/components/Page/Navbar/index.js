import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { dataApi, loading, error } = this.props.data;
    // console.log("--lll---");
    // console.log(loading);
    // console.log(error);
    return (
      <nav className="box-navbar">
        <Link to="/">
          {loading === false && error === false ? (
            <label>
              {dataApi.results[0].name.title} {dataApi.results[0].name.first}{" "}
              {dataApi.results[0].name.last}
            </label>
          ) : (
            <label>Paola.id</label>
          )}
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

const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps, null)(Navbar);
