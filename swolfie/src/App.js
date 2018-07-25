import React, { Component } from 'react';
import Header from './Components/Header/Header';
import routes from './routes'
import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { routes }
      </div>
    );
  }
}

export default App;
