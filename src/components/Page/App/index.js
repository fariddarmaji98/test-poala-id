import React, { Component } from "react";
import Navbar from "../Navbar";
import Main from "../Main";
import Footer from "../Footer";

import "./App.css";

export default class App extends Component {
  render() {
    console.clear();
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}
