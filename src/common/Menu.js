import React from 'react';
import "./Menu.css";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Menu">
        <div className="item">首页</div>
      </div>
    );
  }
}