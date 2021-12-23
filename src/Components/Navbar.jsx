import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item active">
          Home
        </Link>
      </div>
    );
  }
}
