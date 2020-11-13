import React from 'react';
import Menu from '../common/Menu';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="a1"></div>
          <div className="a2"></div>
        </div>
        <Menu />
      </div>
    );
  }
}