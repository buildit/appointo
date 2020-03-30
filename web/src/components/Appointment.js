import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

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
            <label>Select Date: </label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              name="startDate"
              dateFormat="mm/dd/yyyy"
            />
            <br></br>
            <label>Time:</label>
            <select>
              <option>9:00</option>
              <option>10:00</option>
              <option>11:00</option>
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-success">Add Appointment</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Appointment;
