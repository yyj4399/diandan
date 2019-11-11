import React from 'react';

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      local: 0
    };
  }
  render() {
    // top search tab
    return (
      <div className="Top">
        <canvas onClick={() => this.setState({ temp: '' })} width="200" height="100"></canvas>
      </div>
    );
  }
}
