import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class SignedInLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/project/create">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            KH
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;
