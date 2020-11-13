import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from "./index/Home";
import Order from "./index/Order";
import Bill from "./index/Bill";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/bill" component={Bill} />
        </Switch>
      </Router>
    );
  }
}