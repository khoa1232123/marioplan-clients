import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

export class SignedInLinks extends Component {
  render() {
    const { profile: {initials} } = this.props;
    return (
      <ul className="right">
        <li>
          <NavLink to="/project/create">New Project</NavLink>
        </li>
        <li>
          <a href="/" onClick={this.props.signOut}>
            Log Out
          </a>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {initials}
          </NavLink>
        </li>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
