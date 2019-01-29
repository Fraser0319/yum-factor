import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import TopBar from './components/TopBar';
import CakeFeed from './containers/CakeFeed';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AddCake from './components/AddCake';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar />
          <Route path="/" exact component={CakeFeed} />
          <Route path="/add-cake" component={AddCake} />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
