import React, { Component } from "react";
import "../Error/Error.css";

export default class Error extends Component {
  render() {
    return (
      <div className="error">
        <h2 className="ui header">
          <i className="settings icon"></i>
          <div className="content">404 Page Not Found</div>
        </h2>
      </div>
    );
  }
}
