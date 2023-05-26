import React from 'react';
import { NavLink } from 'react-router-dom';
import TimeEntryModal from './time-entry-modal.component';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <NavLink to="/" className="navbar-brand">JobSearch TimeTracker</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <NavLink to="/" className="nav-link" activeClassName="active" end>Home</NavLink>
          </li>
        </ul>
        <div className="navbar-nav ml-auto">
          <li className="navbar-item">
            <TimeEntryModal />
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
