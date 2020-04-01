import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListingPage from "./components/ListingPage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./components/welcome";

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#" style={{ alignSelf: "center" }}>
          Appointo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>

      <div>
        <Route exact path="/" component={Welcome} />
        <Route path="/sellers-list" component={ListingPage} />
      </div>
      <footer>
        <div class="copyright">
          <p>Appointo by Buildit</p>
        </div>
        <div class="social">
          <a href="#" class="support">
            Contact Us
          </a>
          <a href="#" class="face">
            f
          </a>
          <a href="#" class="tweet">
            t
          </a>
          <a href="#" class="linked">
            in
          </a>
        </div>
      </footer>
    </Router>
  );
}

export default App;
