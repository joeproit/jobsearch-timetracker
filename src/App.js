import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import HomePage from "./components/home-page.component";
import TimeEntryModal from './components/time-entry-modal.component';
import useIndexedDB from './useIndexedDB';

function App() {
  const [entries, setEntries] = useState([]);
  const { getEntries, addEntry } = useIndexedDB('timeEntries');

  useEffect(() => {
    const fetchEntries = async () => {
      const allEntries = await getEntries();
      setEntries(allEntries);
    };
    fetchEntries();
  }, [getEntries]);

  const handleEntrySubmit = async (entry) => {
    await addEntry(entry);
    const allEntries = await getEntries();
    setEntries(allEntries);
  };

  return (
    <Router>
      <div className="container">
        <Navbar onNewEntryClick={() => {}} />
        <br/>
        <Routes>
          <Route path="/" element={<HomePage entries={entries} />} index/>
        </Routes>
        <TimeEntryModal 
          show={false} 
          onSubmit={handleEntrySubmit}
        />
      </div>
    </Router>
  );
}

export default App;
