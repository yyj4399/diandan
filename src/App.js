import React from 'react';
import './App.css';
import Menu from './menu';
import 'weui';
import 'react-weui/build/packages/react-weui.css';

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
