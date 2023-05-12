import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import TrackerList from "./components/tracker-list.component";
import CreateTracker from "./components/create-tracker.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<TrackerList />} />
          <Route path="/create" element={<CreateTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
