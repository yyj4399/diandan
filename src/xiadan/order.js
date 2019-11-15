import React from 'react';
import "./order.css";

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Body">
        <div className="Top">
          <img src="/left.png" alt="返回" onClick={() => { }} />
          <span>左左烧烤</span>
          <span>座位</span>
        </div>
      </div>
    );
  }
}