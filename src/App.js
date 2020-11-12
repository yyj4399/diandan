import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from "./index/Home";
import Order from "./index/Order";
import Bill from "./index/Bill";

export default function App() {
  return (
    <Router>
      <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/order" component={Order}/>
            <Route exact path="/bill" component={Bill}/>
      </Switch>
    </Router>
  );
}