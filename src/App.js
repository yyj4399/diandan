import React from 'react';
import './App.css';
import Menu from './menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    fetch('http://localhost:3001', {
      mode: 'no-cors',
      // credentials: 'include',
    })
    .then(res => res.json())
    .then(response => console.log('Success:', response));
    this.state = { date: new Date() };
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
