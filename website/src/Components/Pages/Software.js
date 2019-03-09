import React, { Component } from 'react'
import './Software.css';
import Game from '../Widgets/GameOfFifteen';

export default class Software extends Component{
    render(){
        return(
            <div className="Container">
                <header className="Header">
                   <iframe src="http://www.youtube.com/embed/W7qWa52k-nE"
                        className="video"  frameborder="0" autoplay="1" allowfullscreen></iframe>
                </header>
                <div className="tableContainer">
                    <div className="heading">
                        <h2>Games made with there github repos..</h2>
                    </div>
                    <div className="body">
                        <div className="child"></div>
                        <div className="child"></div>
                        <div className="child"></div>
                        <div className="child"></div>
                        <div className="child"></div>
                        <div className="child"></div>
                        <div className="child"></div>
                        <div className="child"></div>
                        <div className="child"></div>
                        <div className="child"></div>  
                    </div>
                </div>
                

            </div>
        );
    }
}