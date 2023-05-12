import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import TrackerList from "./components/tracker-list.component";
import CreateTracker from "./components/create-tracker.component";
import CreateAccount from "./components/create-account.component";
import AuthenticateAccount from "./components/authenticate-account.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<TrackerList />} />
          <Route path="/create" element={<CreateTracker />} />
          <Route path="/generate" element={<CreateAccount />} />
          <Route path="/authenticate/:uniqueUrl" element={<AuthenticateAccount />} />
          <Route path="/:uniqueUrl" element={<TrackerList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
