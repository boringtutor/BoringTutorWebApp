import React, { Component } from 'react'
import './Toolbar.css';
import {NavLink} from "react-router-dom";


export default class Toolbar extends Component{
    render(){
        return(
            <div className="navbar">
            <ul className="navigation" role="navigation">
                        <li><NavLink className = "navigation-link" activeStyle={{ color: 'lightblue' }} to="/" exact >Sarvinderjit Singh</NavLink></li>
                        <li><NavLink className = "navigation-link" activeStyle={{ color: 'lightblue' }} to="/Software" >Software</NavLink></li>
                        <li><NavLink className = "navigation-link" activeStyle={{ color: 'lightblue' }} to="/GithubProjects" >Github-projects</NavLink></li>
                        <li><NavLink className = "navigation-link" activeStyle={{ color: 'lightblue' }} to="/Courses" >Courses</NavLink></li>
                        <div className="box"></div>
                        <li><NavLink className = "navigation-link" activeStyle={{ color: 'lightblue' }} to="/Contact" >Contact</NavLink></li>
                        <li><NavLink className = "navigation-link" activeStyle={{ color: 'lightblue' }} to="/About" >About</NavLink></li>
            </ul>
            </div>
        
        );
    }
}