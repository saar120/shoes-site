import React, { Component } from "react";
import "../Loader/Loader.css";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader">Loading...</div>
      </div>
    );
  }
}
