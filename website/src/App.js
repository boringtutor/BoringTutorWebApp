import React, { Component } from 'react';
import './App.css';
import Toolbar from './Components/Widgets/Toolbar';
import Footer from './Components/Widgets/Footer';
import { BrowserRouter , Route, Link,Switch } from "react-router-dom";
import Home from './Components/Pages/Home';
import Software from './Components/Pages/Software';
import GithubProjects from './Components/Pages/GithubProjects';
import Courses from './Components/Pages/Courses';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Toolbar/>
        <div className="body-content">
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Software" component={Software} exact/>
            <Route path="/GithubProjects" component={GithubProjects} exact/>  
            <Route path="/Courses" component={Courses} exact/>
            <Route path="/Contact" component={Contact} exact/>
            <Route path="/About" component={About} exact/>
          </Switch>
        </div>

        <Footer className="footer"/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
