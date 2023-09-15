import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Components/create';
import About from './Components/About'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              < Create/>
            </Route>
            <Route path="/about">
              < About/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
