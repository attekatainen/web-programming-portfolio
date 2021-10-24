import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../App.css";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Etusivu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Tehtava1"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Viikko 1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Tehtava4"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Viikko 2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Tehtava5"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Viikko 3
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Tehtava6"
                className="nav-links"
                activeClassName="nav-links-active"
              >
                Viikko 5
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
