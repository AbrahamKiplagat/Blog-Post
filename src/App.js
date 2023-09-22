import React from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Authentification/LogIn";
import Register from "./Authentification/Register";
import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import Welcome from "./Components/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/BlogDetails/:id">
              <BlogDetails/>
            </Route>
            <Route exact path ="/about">
              <Welcome/>
            </Route>
            <Route exact path ="/login">
                <Login/>
            </Route >
            <Route exact path ="/register">
              <Register/>
            </Route>
            <Route exact path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
