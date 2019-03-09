import React, { Component } from 'react'
import './Githubprojects.css';

export default class GithubProjects extends Component{
    render(){
        return(
            <div className="body">
                <div className="table">
                        <ul className="headerContents" role="navigation">
                            <li className="headertitles">Title</li>
                            <li className="headertitles">Description</li>
                            <li className="headertitles">Language</li>
                            <li className="headertitles">Created-at</li>
                            <li className="headertitles">Forks</li>
                            <li className="headertitles">Stars</li>
                        </ul>

                    <ul className="Contents">
                        <ul className="Content-item">
                            <li className="headertitles">Boring Tutor Web App</li>
                            <li className="headertitles">Hello and welcome to the</li>
                            <li className="headertitles">Java Script</li>
                            <li className="headertitles">Feb 2 2019</li>
                            <li className="headertitles">0</li>
                            <li className="headertitles">1</li>

                        </ul>
                        <ul className="Content-item">
                            <li className="headertitles">Game of fifteen</li>
                            <li className="headertitles">This is the Puzzle Game</li>
                            <li className="headertitles">Python</li>
                            <li className="headertitles">27 February 2019</li>
                            <li className="headertitles">0</li>
                            <li className="headertitles">1</li>

                        </ul>
                        <ul className="Content-item">
                            <li className="headertitles">Fractal Trees</li>
                            <li className="headertitles">This shows the mathematical trees</li>
                            <li className="headertitles">Javascript</li>
                            <li className="headertitles">8 March 2019</li>
                            <li className="headertitles">0</li>
                            <li className="headertitles">1</li>

                        </ul>
                        
                    </ul>
                </div>

            </div>
        );
    }
}