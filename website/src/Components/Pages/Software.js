import React, { Component } from 'react'
import './Software.css';
import Game from '../Widgets/GameOfFifteen';

export default class Software extends Component{
    render(){
        return(
            <div className="cont">
                <div className="Viewer">
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