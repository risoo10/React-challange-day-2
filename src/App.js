import React, { Component } from 'react';
import HeaderPanel from './HeaderPanel';
import PostsPanel from "./PostsPanel";

class App extends Component {
  render() {
      return (
          <div>
              <HeaderPanel></HeaderPanel>
              <PostsPanel></PostsPanel>
          </div>
      );
  }
}

export default App;
