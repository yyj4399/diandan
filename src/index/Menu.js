import React from 'react';
import Nav from '../common/Nav';
import "./Menu.css";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 菜单
      list1: [
        // 分类列表
        {
          id: 1, // 分类id
          name: '热销', // 分类名称
        },
        {
          id: 2, // 分类id
          name: '折扣', // 分类名称
        }
      ],
      list2: [
        // 商品列表
        {
          id: 1, // 商品id
          name: '珍珠奶茶', // 商品名称
          face: '', // 商品封面图
        },
      ],
      list1_index: 0,
      // 购物车
      cart: [
        // 包裹
        {
          // 商品
          goods: {}
        },
      ],
    };
  }
  // 渲染
  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="a1">
            <this.renderList1 list={this.state.list1} now={this.state.list1_index} click={(now) => { this.handleList1(now) }} />
          </div>
          <div className="a2">
            <this.renderList2 list={this.state.list1} now={this.state.list1_index} click={(now) => { this.handleList2(now) }} />
          </div>
        </div>
        <Nav />
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
    return props.list.map((item, index) =>
      <div key={index} className="item">
        <img src={item.face} alt={item.name} />
        <div className="c1"></div>
        <span>{item.name}</span>
      </div>
    );
  }
  handleList2(now) {
    this.setState({ list1_index: now });
  }
}