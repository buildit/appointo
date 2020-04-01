import React, { Component } from "react";
import logo from "../assets/logo.png";
import "./welcome.css";
import next from "../assets/next.png";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <img src={logo} alt="logo" className="logo" />
          <br></br>
          <h1 className="text-center">Welcome to Appointo!</h1>
        </div>
        <div className="body">
          <h3>
            Appointo is a Multi-tenant appointment booking platform. It provides
            buyers and sellers an easy way to connect and meet.
          </h3>
          <br></br>
          <br></br>
          <p class="text-center">
            Proceed to the listings {"    "}
            <a href="/sellers-list">
              <i class="fa fa-arrow-right"></i>
            </a>
            {/* <img src={next} width="1%" href="/sellers-list" /> */}
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
