import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import HomePage from "./components/home-page.component";
import TimeEntryModal from './components/time-entry-modal.component';
import useIndexedDB from './useIndexedDB';

function App() {
  const [modalShow, setModalShow] = useState(false);
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
    setModalShow(false);
  };

  return (
    <Router>
      <div className="container">
        <Navbar onNewEntryClick={() => setModalShow(true)} />
        <br/>
        <Routes>
          <Route path="/" element={<HomePage entries={entries} />} index/>
        </Routes>
        <TimeEntryModal 
          show={modalShow} 
          onHide={() => setModalShow(false)}
          onSubmit={handleEntrySubmit}
        />
      </div>
    </Router>
  );
}

export default App;
