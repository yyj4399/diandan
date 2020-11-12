import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from "./index/Indexx";
import Order from "./index/Order";

export default function App() {
  return (
    <Router>
      {/* <Link to="/">Home</Link> */}
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <Index />
        </Route>
        <Route path="order">
          <Order />
        </Route>
      </Switch>
    </Router>
  );
}