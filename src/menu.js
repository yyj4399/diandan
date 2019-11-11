import React from 'react';
import "./Menu.css";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { title: "超值优惠" },
        { title: "新品上架" },
      ],
    }
  }
  render() {
    // 左侧菜单栏
    return (
      <div className="Menu">
        {this.state.tabs.map((tab, index) => {
          return (
            <div className="tab" key={index}>
              <span>{tab.title}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
