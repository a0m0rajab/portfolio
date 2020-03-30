import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch ,   Link } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
import Portfolio from './components/Portfolio'



function App() {
  document.title="A.Rajab :)";
    return (
<Router>
<Switch>
  <Route
    exact path='/'
    component={Homepage}

  />
  <Route
    exact path='/home'
    component={Homepage}
  />
  <Route
    exact path='/about'
    component={About}
  />
  <Route
    exact path='/projects'
    component={Portfolio}
  />
  <Route
    exact path='/contact'
    // component={Contact}
  />
</Switch>
</Router>
    );
}

export default App;