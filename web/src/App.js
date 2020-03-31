import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListingPage from "./components/ListingPage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ListingPage></ListingPage> */}
        {/* <LoginPage></LoginPage> */}
      </div>

      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/sellers-list" component={ListingPage} />
      </div>
    </Router>
  );
}

export default App;
