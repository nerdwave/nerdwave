// the crucial libs
import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

// Routes
import Home from './Components/Home';
import About from './Components/About';

/*
  APP COMPONENT
*/
class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        { /* DEFAULT ROUTE */ }
        <Route path="/" component={Home}/>
        { /* ADDITIONAL ROUTES */ }
        <Route path="/about" component={About}/>
      </Router>
    );
  }
}

// the clean export
export default App;