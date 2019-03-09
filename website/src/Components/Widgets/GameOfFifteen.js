import React, { Component } from 'react';
import './GameOfFifteen.css';

export default class Game extends Component{
/* 
    Constrictor(props){
        super(props);
        this.state={

        };
    } */

    renderSquare(i){
        return <Square/>
    }

    render(){
        return(
            <div className="game">
                     
            </div>
        );
    }
}

class Square extends React.Component {
  render() {
    return (
        <div></div>
    );
  }
}
