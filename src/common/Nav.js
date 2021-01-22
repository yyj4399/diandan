import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="menu">
        <Link className="item" to="/" >首页</Link>
        <Link className="item" to="/order" >点单</Link>
        <Link className="item" to="/bill" >账单</Link>
      </div>
    );
  }
}