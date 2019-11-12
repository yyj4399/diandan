import React from 'react';
import './App.css';
import Menu from './menu';
import Top from './top';

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
        <Top />
        <Menu />
      </div>
    );
  }
}

export default App;
