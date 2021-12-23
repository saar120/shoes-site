import React, { Component } from "react";
import api from "../api";

export default class AddPage extends Component {
  state = {
    itemName: "",
    itemDescription: "",
    itemCount: "",
    itemImage: "",
    err: "",
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addHandler = async (e) => {
    e.preventDefault();
    const newItem = {
      itemname: this.state.itemName,
      description: this.state.itemDescription,
      count: this.state.itemCount,
      image: this.state.itemImage,
    };
    await api.addItem(newItem);
    this.props.history.push("/");
  };

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Product Name</label>
          <input
            onChange={this.onChangeHandler}
            type="text"
            name="itemName"
            placeholder="Product Name"
            value={this.state.itemName}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <textarea
            onChange={this.onChangeHandler}
            name="itemDescription"
            id=""
            cols="30"
            rows="10"
            value={this.state.itemDescription}></textarea>
        </div>
        <div className="field">
          <label>Count</label>
          <input
            onChange={this.onChangeHandler}
            type="number"
            name="itemCount"
            placeholder="Count"
            value={this.state.itemCount}
          />
        </div>
        <div className="field">
          <label>Image URL</label>
          <input
            onChange={this.onChangeHandler}
            type="text"
            name="itemImage"
            placeholder="Image URL"
            value={this.state.itemImage}
          />
        </div>
        <button onClick={this.addHandler} className="ui button" type="">
          Update
        </button>
      </form>
    );
  }
}
