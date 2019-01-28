import React, { Component} from "react";
import {hot} from "react-hot-loader";
import TopBar from "./components/TopBar";
import CakeCard from "./components/CakeCard";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <TopBar />
        <CakeCard />
      </div>
    );
  }
}

export default hot(module) (App);
