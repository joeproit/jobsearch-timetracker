import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import TrackerList from "./components/tracker-list.component";
import CreateTracker from "./components/create-tracker.component";
import TimeEntryModal from "./components/time-entry-modal.component";
import NotesPage from "./components/notes-page.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/" element={<TrackerList />} index/>
          <Route path="/create" element={<CreateTracker />} />
          <Route path="/time-entry" element={<TimeEntryModal />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
