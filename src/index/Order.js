import React from 'react';
import Menu from '../common/Menu';
import "./Order.css";

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1, name: '热销', data: [
            { id: 11, name: '糖醋排骨' },
            { id: 12, name: '可乐鸡翅' },
          ]
        },
        {
          id: 2, name: '热销', data: [
            { id: 11, name: '鲍鱼鸡翅' }
          ]
        }
      ],
      list1_index: 0
    };
  }
  // 渲染
  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="a1">
            <this.renderList1 list={this.state.list} now={this.state.list1_index} click={(now) => { this.handleList1(now) }} />
          </div>
          <div className="a2">
            <this.renderList2 list={this.state.list} now={this.state.list1_index} click={(now) => { this.handleList2(now) }} />
          </div>
        </div>
        <Menu />
      </div>
    );
  }
  // 左菜单
  renderList1(props) {
    return props.list.map((item, index) =>
      <div key={index} onClick={() => { props.click(index) }} className={`item ${props.now === index ? 'active' : ''}`}>
        <span>{item.name}</span>
      </div>
    );
  }
  handleList1(now) {
    this.setState({ list1_index: now });
  }
  // 右菜单
  renderList2(props) {
    return props.list[props.now].data.map((item, index) =>
      <div key={index} className="item active">
        <span>{item.name}</span>
      </div>
    );
  }
  handleList2(now) {
    this.setState({ list1_index: now });
  }
}