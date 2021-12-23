import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = { searchValue: "" };
  onChangeHandler = (e) => {
    this.setState({ searchValue: e.target.value }, () => {
      this.props.getValue(this.state.searchValue);
    });
  };
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item active">
          Home
        </Link>
        <Link to="/add" className="item">
          Add
        </Link>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input
                onChange={this.onChangeHandler}
                value={this.state.searchValue}
                type="text"
                placeholder="Search..."
              />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
