import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Route path="/" element={<TrackerList />} index/>
          <Route path="/create" element={<CreateTracker />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/authenticate" element={<AuthenticateAccount />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
