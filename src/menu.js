import React from 'react';

import {
  Tab,
  TabBody,
  NavBar,
  NavBarItem,
  Article
} from 'react-weui';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
    }
  }
  render() {
    return (
      <Tab>
        <NavBar>
          <NavBarItem active={this.state.tab == 0} onClick={e => this.setState({ tab: 0 })}>Nav1</NavBarItem>
          <NavBarItem active={this.state.tab == 1} onClick={e => this.setState({ tab: 1 })}>Nav2</NavBarItem>
          <NavBarItem active={this.state.tab == 2} onClick={e => this.setState({ tab: 2 })}>Nav3</NavBarItem>
        </NavBar>
        <TabBody>
          <Article style={{ display: this.state.tab == 0 ? null : 'none' }}>
          </Article>
          <Article style={{ display: this.state.tab == 1 ? null : 'none' }}>
          </Article>
          <Article style={{ display: this.state.tab == 2 ? null : 'none' }}>
          </Article>
        </TabBody>
      </Tab>
    );
  }
}
