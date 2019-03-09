import React, { Component } from 'react'
import './Home.css';
import p5 from 'p5';

export default class Home extends Component{

    componentDidMount = () => {
        this.sketch = new p5(p => {

            var x = 400;
            var y = 400;

            var angle; //the angle by which we want to rotate
            var reducer = 0.67; //length by which we want to reduce the length of the branch line

            var time = 0; //start the time

            var miliseconds = 3; //time span after which we want to update the tree

            var k; //for the repitition after we reach the max angle

            var MAX;


            p.setup = function () {
                p.createCanvas(x, y).parent("Canvas");
                angle = 0;
                MAX = p.PI / 4; //The max angle we want out tree to go to
            }
            p.draw = function () {
                p.background(255);
                //can update the angle to random value to animate the tree
                //by puting the angle from 0 to PI at random and changing it
                //after certain time
                time = time + 1;
                if (time === miliseconds) {
                    var t = MAX * 0.1; // to update the angle by some amount;	

                    //set up the repetor loop to either go from 
                    //start to end or end to start
                    if (angle <= 0) {
                        k = +1;
                    }
                    if (angle >= 1.0) {
                        k = -1;
                    }

                    //no update the angle to do the animation
                    angle = angle + k * t;
                    //console.log(angle);
                    time = 0;
                }
                //console.log(time);
                p.stroke(55);
                p.translate(200, p.height);
                p.drawTree(100);
            }
            p.drawTree = function(len){
                    p.line(0, 0, 0, -len);
                    p.translate(0, -len);
                    if (len > 4) {
                        p.push();
                        p.rotate(angle);
                        p.drawTree(len * reducer);
                        p.pop();
                        p.push();
                        p.rotate(-angle);
                        p.drawTree(len * reducer);
                        p.pop();
                    }

            }
        });
    }

    
    render(){
        return(
            <div>
                <div className="Container">
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
                     <div className="Canvas" id="Canvas">

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