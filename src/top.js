import React from 'react';
import "./Top.css";

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
        <canvas className="jiantou" onClick={()=>{}}></canvas>
      </div>
    );
  }
}
