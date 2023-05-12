import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <NavLink to="/" className="navbar-brand">JobSearch TimeTracker</NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <NavLink to="/" className="nav-link" activeClassName="active" end>Trackers</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/create" className="nav-link" activeClassName="active">Create Tracker</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/create-account" className="nav-link" activeClassName="active">Create Account</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/authenticate" className="nav-link" activeClassName="active">Authenticate Account</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
