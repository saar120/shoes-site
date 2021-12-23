import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Error from "./Components/Error/Error";
import Navbar from "./Components/Navbar";
import EditPage from "./Pages/EditPage";
import MainPage from "./Pages/MainPage";
import React, { Component } from "react";
import AddPage from "./Pages/AddPage";

export default class App extends Component {
  state = { navSearchValue: "" };

  searchHandler = (value) => {
    this.setState({ navSearchValue: value });
  };

  render() {
    return (
      <Router>
        <Navbar getValue={(value) => this.searchHandler(value)} />
        <Switch>
          <Route path="/" exact>
            <MainPage searchValue={this.state.navSearchValue} />
          </Route>
          <Route path="/edit/:id" exact component={EditPage} />
          <Route path="/add" exact component={AddPage} />
          <Route path="/*" exact component={Error} />
        </Switch>
      </Router>
    );
  }
}
