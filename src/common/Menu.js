import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css";

export default class Menu extends React.Component {
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