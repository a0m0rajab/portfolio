import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch  } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
import Portfolio from './components/Portfolio'



function App() {
    return (
 <Router>
<Switch>
  <Route
    exact path={process.env.PUBLIC_URL + '/'}
    component={Homepage}
  />
  <Route
    exact path={process.env.PUBLIC_URL  + '/home'}
    component={Homepage}
  />
  <Route
    exact path={process.env.PUBLIC_URL  + '/about'}
    component={About}
  />
  <Route
    exact path={process.env.PUBLIC_URL + '/projects'}
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