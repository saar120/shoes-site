import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ItemCard extends Component {
  render() {
    const { image, itemname, description, count, id } = this.props.item;
    return (
      <div className="card">
        <div className="image">
          <img src={image} alt={itemname} />
        </div>
        <div className="content">
          <div className="header">{itemname}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <span className="right floated">Count: {count}</span>
        </div>
        <div className="ui buttons">
          <Link to={`/edit/${id}`} key={id} className="ui button">
            Edit
          </Link>
          <button onClick={() => this.props.deleteItem(id)} className="ui  button">
            Delete
          </button>
        </div>
      </div>
    );
  }
}
