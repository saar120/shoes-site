import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Error from "./Components/Error/Error";
import Navbar from "./Components/Navbar";
import EditPage from "./Pages/EditPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/edit/:id" exact component={EditPage} />
        <Route path="/*" exact component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
