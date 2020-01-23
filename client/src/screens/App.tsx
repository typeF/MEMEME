import React, { Component, Fragment } from "react";
import NavBar from "../components/NavBar";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Routes />
      </Fragment>
    );
  }
}

export default App;
