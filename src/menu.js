import React from 'react';
import "./Menu.css";

import {
  Tab,
  TabBody,
  NavBar,
  NavBarItem,
  Article
} from 'react-weui';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {title: "超值优惠"},
        {title: "新品上架"},
      ],
    }
  }
  render() {
    // 左侧菜单栏
    return (
      <div className="Menu">
        <ul>
          {this.tab()}
        </ul>
      </div>
    );
  }
  tab() {
    return (
      <ul>
        {this.state.tabs.map((tab) => {
        return <li>{tab.title}</li>;
        })}
      </ul>
    );
  }
}
