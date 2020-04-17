import React, { Component } from "react";
import Calendar from "react-calendar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Appointment.css";
import "react-calendar/dist/Calendar.css";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (date) => this.setState({ date });

  handleSubmit(e) {
    e.preventDefault();
    let main = this.state.startDate;
    console.log(main.format("L"));
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <br></br>
            <h5 className="head">Date</h5>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
              className="middle"
            />
            <input type="text" value={this.state.date} className="middle" />
            <br></br>
            <br></br>
            <h5 className="head">Time</h5>
            <select className="middle">
              <option>9:00</option>
              <option>10:00</option>
              <option>11:00</option>
            </select>
          </div>
          <br></br>
          <div className="form-group">
            <button className="btn btn-success">Add Appointment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Appointment;
