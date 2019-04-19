import React, { Component } from 'react';
import './App.css';
import Page  from "./page/containers/page.js"


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Page data={this.props.data} />
          {console.log(this.props.data)}
      </div>
    );
  }
}

export default App;
