import React, { Component } from "react";
import "./LoginForm.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import ListingPage from "./ListingPage";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3 className="text-center">Sign In</h3>
        <br></br>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          formAction="\sellers-list"
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
        <br></br>
        <p className="text-center">OR</p>
        <br></br>
        <button
          type="submit"
          className="btn btn-success btn-block"
          formAction="\sellers-list"
        >
          Sign in as Guest
        </button>
      </form>
    );
  }
}
