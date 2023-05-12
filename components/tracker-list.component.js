import React, { Component } from 'react';
import axios from 'axios';
import Tracker from './tracker.component';

export default class TrackerList extends Component {
  constructor(props) {
    super(props);

    this.state = {trackers: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/tracker/')
      .then(response => {
        this.setState({ trackers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  trackerList() {
    return this.state.trackers.map(currenttracker => {
      return <Tracker tracker={currenttracker} key={currenttracker._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Trackers</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { this.trackerList() }
          </tbody>
        </table>
      </div>
    )
  }
}