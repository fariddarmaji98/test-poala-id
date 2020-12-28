import React, { Component } from "react";
import Navbar from "../Navbar";
import Main from "../Main";
import Footer from "../Footer";
import { LoadingPage, LoadingPaola } from "../Main/Loading";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }
  render() {
    console.clear();
    return this.state.loading ? (
      <LoadingPaola />
    ) : (
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}
