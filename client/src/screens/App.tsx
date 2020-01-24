import React, { Component, Fragment } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Routes from "./Routes";

class App extends Component {
  render(): JSX.Element {
    return (
      <Fragment>
        <NavBar />
        <Routes />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
