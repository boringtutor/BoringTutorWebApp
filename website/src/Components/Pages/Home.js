import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component{
    render(){
        return(
            <div>
                <div className="HeaderInfo">
                    <div>
                        <h1>SarvinderJit Singh</h1>
                        <h3>Self-learning Software and Machine Learning engineering</h3>
                        <h3>through research and development.</h3>
                        <h4>1 Subscriber </h4>  
                        <div className="readMore">
                            <h2 > Read More...</h2> 
                        </div>
                    </div>
                </div>
            <div className="secondParagraph">
                <div className="title   ">
                    <div>
                        <h1>My Work</h1>
                    </div>
                    <div>
                        I am just a super curious guy .My channel exists to share these ideas and theories that
                        interest me.I spend lot of time building software and projects,but still there is alot 
                        more to go
                    </div>
                    <div className="discription" >
                        <div className="col1">
                        </div>
                        <div className="col2">
                        </div>
                        <div className="col3">
                        </div>

                    </div>
                </div>
            </div>
               

                    
            </div>
        );
    }
}