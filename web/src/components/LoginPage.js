import React, { Component } from "react";
import "./LoginPage.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import Login from "./LoginForm";
const imgMyimageexample = require("../assets/bg-01.jpg");

const divStyle = {
  width: "100%",
  height: "1000px",
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: "cover"
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="image-box">
        <div className="login-card">
          <Login></Login>
        </div>
      </div>
    );
  }
}

export default LoginPage;
