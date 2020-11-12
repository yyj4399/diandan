import React from 'react';
import Menu from '../common/Menu';

export default class Bill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <Menu />
      </div>
    );
  }
}