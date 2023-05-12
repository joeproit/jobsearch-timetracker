import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import TrackerList from "./components/tracker-list.component";
import CreateTracker from "./components/create-tracker.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={TrackerList} />
        <Route path="/create" component={CreateTracker} />
      </div>
    </Router>
  );
}

export default App;
