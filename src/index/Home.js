import React from 'react';
import Menu from '../common/Menu';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mainx">
        <div className="Top">
          {/* <img src="/left.png" alt="返回" onClick={() => { }} /> */}
          <span>左左烧烤</span>
          <span>座位</span>
        </div>
        <Menu />
      </div>
    );
  }
}