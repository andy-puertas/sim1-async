import React, { Component } from 'react';
import routes from './routes'
import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        { routes }
      </div>
    );
  }
}

export default App;

