import React, { Component } from 'react'
import './Toolbar.css';
export default class Toolbar extends Component{
    render(){
        return(
            <div className="navbar">
            <ul className="navigation" role="navigation">
                        <li>Sarvinderjit Singh</li>
                        <li>Software</li>
                        <li>Github-projects</li>
                        <li>Courses</li>
                        <div className="box"></div>
                        <li>Contact</li>
                        <li>About</li>
            </ul>
            </div>
        
        );
    }
}