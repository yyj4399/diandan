import React from 'react';
import Menu from '../common/Menu';
import "./Order.css";

export default class Order extends React.Component {
  List = [{ id: 1, name: '热销', data: [{ id: 11, name: '糖醋排骨' }] }, { id: 2, name: '热销', data: [{ id: 11, name: '糖醋排骨' }] }];
  constructor(props) {
    super(props);
    console.log(this.state);
    this.handleList1(0);
  }
  handleList1(now) {
    // 左菜单
    this.List1 = this.List.map((item, index) => {
      if (now === index) {
        return (
          <div key={index} onClick={this.handleList2.bind(this, index)} className="item active">
            <span>{item.name}</span>
          </div>
        );
      } else {
        return (
          <div key={index} onClick={this.handleList2.bind(this, index)} className="item">
            <span>{item.name}</span>
          </div>
        );
      }
    });
  }
  handleList2(index) {
    // 右菜单
    this.handleList1(index);
    this.List2 = this.List[index].data.map((item, index) => {
      if (this.state.list_1 === index) {
        return (
          <div key={index} className="item active">
            <span>{item.name}</span>
          </div>
        );
      } else {
        return (
          <div key={index} className="item">
            <span>{item.name}</span>
          </div>
        );
      }
    });
  }
  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="a1">
            {this.List1}
          </div>
          <div className="a2">
            {this.List1}
          </div>
        </div>
        <Menu />
      </div>
    );
  }
}