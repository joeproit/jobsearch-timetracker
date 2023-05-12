import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function TrackerComponent() {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();

    const tracker = {
      username: username,
      description: description,
      duration: duration,
      date: date
    }

    console.log(tracker);

    axios.post('http://localhost:5000/tracker/add', tracker)
      .then(res => console.log(res.data));

    // You might want to redirect user to tracker list after creation
    // window.location = '/';
  }

  return (
    <div>
      <h3>Create New Tracker Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Tracker Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default TrackerComponent;
