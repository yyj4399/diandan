import React from 'react';
import './App.css';
import Menu from './menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
  }
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

export default App;
