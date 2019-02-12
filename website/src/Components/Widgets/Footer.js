import React, { Component } from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="fotter-content">
                    <h3 className="footer-heading">Follow the journey</h3>
                    <h3 className="footer-bottom">
                        <SocialIcon className="footer-icon" url="https://twitter.com/awesome50414650" />
                        <SocialIcon className="footer-icon" url="https://www.facebook.com/sarvinderjit.singh" />
                        <SocialIcon className="footer-icon" url="https://www.instagram.com/savi896/?hl=en" />
                        <SocialIcon className="footer-icon" url="http://youtube.com/" />
                        <SocialIcon className="footer-icon" url="https://github.com/boringtutor" />
                    </h3>
                </div>
            </div>
        );
    }
}