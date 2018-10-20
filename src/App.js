import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import SinglePage from './components/SinglePage';
import Footer from './components/Footer';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/launch/:id" component={SinglePage} />
        <Footer />
      </div>
    );
  }
}

export default App;
