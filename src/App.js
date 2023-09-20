import React from "react";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Create from "./Components/Create";
import BlogDetails from "./Components/BlogDetails";
import NotFound from "./Components/NotFound";

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
            <Route exact path="/BlogDetails/:id"> {/* Capture the blog ID */}
              <BlogDetails/>
            </Route>
            <Route exact path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
