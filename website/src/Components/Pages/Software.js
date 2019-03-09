import React, { Component } from 'react'
import './Software.css';
import Game from '../Widgets/GameOfFifteen';

export default class Software extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to the Game of Fifteen</h1>
                <Game></Game>                
            </div>
        );
    }
}