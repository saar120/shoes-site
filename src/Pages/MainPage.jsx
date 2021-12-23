import React, { Component } from "react";
import api from "../api";
import ItemCard from "../Components/ItemCard";
import Loader from "../Components/Loader/Loader";

export default class MainPage extends Component {
  state = { items: [], loading: false };

  setItems = async () => {
    this.setState({ loading: true });
    const items = await api.getItems();
    this.setState({ items, loading: false });
  };

  deleteHandler = async (id) => {
    await api.deleteItem(id);
    this.setItems();
  };

  renderItems = () => {
    return this.filterItems(this.state.items, this.props.searchValue).map((item) => {
      return <ItemCard item={item} key={item.id} deleteItem={(id) => this.deleteHandler(id)} />;
    });
  };

  filterItems = (items, value) => {
    return items.filter((item) => {
      return item.itemname.indexOf(value) !== -1;
    });
  };

  componentDidMount = () => {
    this.setItems();
  };

  render() {
    return (
      <div className="main-container">
        <h1>Shoes Site Manager</h1>
        {this.state.loading && <Loader />}
        <div className="ui link cards">{this.renderItems()}</div>
      </div>
    );
  }
}
