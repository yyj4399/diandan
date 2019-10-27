import React from 'react';
import './App.css';
import Menu from './menu';
import 'weui';
import 'react-weui/build/packages/react-weui.css';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/')
      .then(response => {
        // handle success
        console.log(response);
        this.setState({data: response.data});
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        // console.log(this.reqdata)
        console.log(this.state.data)
      });
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
