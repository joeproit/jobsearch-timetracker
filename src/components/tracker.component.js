import React, { Component } from 'react';

export default class Tracker extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.tracker.username}</td>
        <td>{this.props.tracker.description}</td>
        <td>{this.props.tracker.duration}</td>
        <td>{this.props.tracker.date.substring(0,10)}</td>
      </tr>
    )
  }
}
