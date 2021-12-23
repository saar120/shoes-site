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
    // const deletedItem = this.state.items.find((item) => item.id === id);
    // const newItemsList = [...this.state.items];
    // newItemsList.splice(newItemsList.indexOf(deletedItem), 1);
    // this.setState({ items: newItemsList });
  };

  renderItems = () => {
    return this.state.items.map((item) => {
      return <ItemCard item={item} key={item.id} deleteItem={(id) => this.deleteHandler(id)} />;
    });
  };
  componentDidMount = () => {
    this.setItems();
  };

  render() {
    return (
      <div className="main-container">
        <h1>Welcome To My Useless Shop</h1>
        {this.state.loading && <Loader />}
        <div className="ui link cards">{this.renderItems()}</div>
      </div>
    );
  }
}
