import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from './Home.jsx';

const Index = ({ children }) => (
  <div>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
      <NotFound default />
    </Router>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <Link to="/">Home</Link>
    <br />
    <span>Some text</span>
  </div>
);

const NotFound = () => (
  <div>
    <h2>Error 404</h2>
    <span>Page do not exists</span>
  </div>
)


render(<Index />, document.getElementById("root"));