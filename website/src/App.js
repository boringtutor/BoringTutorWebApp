import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Widgets/Toolbar';
import Footer from './Components/Widgets/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <div className="body-content">This will contain the routers</div>

        <Footer className="footer"/>
      </div>
    );
  }
}

export default App;
