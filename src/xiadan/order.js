import React from 'react';
import "./order.css";

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Top">
        <img src="/left.png" alt="图片加载失败..." onClick={() => { }} />
        <span>点菜</span>
        <span>座位</span>
      </div>
    );
  }
}