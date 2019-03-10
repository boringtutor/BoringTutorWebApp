import React, { Component } from 'react'
import './Software.css';
import Game from '../Widgets/GameOfFifteen';
import ReactPlayer from 'react-player';



export default class Software extends Component{
    render(){
        return(
            <div className="cont">
                <div className="Viewer">
                <ReactPlayer width="100%" height="100%" url='https://www.youtube.com/watch?v=OQQ-W_63UgQ' playing />
                </div>
                <div className="listOfGames">
                    <div className="game"></div>
                    <div className="game"></div>
                    <div className="game"></div>
                    <div className="game"></div>
                    <div className="game"></div>
                    <div className="game"></div>
                    <div className="game"></div>
                    <div className="game"></div>
                    <div className="game"></div>

                </div>
            </div>
        );
    }
}