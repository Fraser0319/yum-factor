import React, { Component} from "react";
import {hot} from "react-hot-loader";
import TopBar from "./components/TopBar";
import CakeFeed from "./containers/CakeFeed";
import "./App.css";

class App extends Component{
  render() {
    return(
      <div className="App">
        <TopBar />
        <CakeFeed />
      </div>
    );
  }
}

export default hot(module) (App);
