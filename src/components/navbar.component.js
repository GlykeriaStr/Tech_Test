import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Spicy Mango
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" class="nav-link">
                Exercises
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/create" class="nav-link">
                Create Exercise
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/user" class="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
