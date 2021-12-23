import React, { Component } from "react";
import api from "../api";
import Error from "../Components/Error/Error";

export default class EditPage extends Component {
  state = {
    itemName: "",
    itemDescription: "",
    itemCount: 0,
    itemImage: "",
    err: "",
  };
  id = this.props.match.params.id;

  setItem = async (id) => {
    try {
      const item = await api.getItem(id);
      this.setState({
        itemName: item.itemname,
        itemDescription: item.description,
        itemCount: item.count,
        itemImage: item.image,
      });
    } catch (err) {
      this.setState({ err: err });
    }
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateHandler = async (e) => {
    e.preventDefault();
    const updatedItem = {
      itemname: this.state.itemName,
      description: this.state.itemDescription,
      count: this.state.itemCount,
      image: this.state.itemImage,
    };
    await api.editItem(updatedItem, this.id);
    this.props.history.push("/");
  };

  componentDidMount = () => {
    this.setItem(this.id);
  };

  render() {
    return (
      <>
        {this.state.err ? (
          <Error />
        ) : (
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
            <button onClick={this.updateHandler} className="ui button" type="">
              Update
            </button>
          </form>
        )}
      </>
    );
  }
}
