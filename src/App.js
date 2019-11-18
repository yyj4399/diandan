import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from "./index/index";
import Order from "./xiadan/order";

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
      </Switch>
    </Router>
  );
}