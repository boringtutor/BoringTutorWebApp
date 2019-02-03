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
                        <SocialIcon className="footer-icon" url="http://twitter.com/jaketrent" />
                        <SocialIcon className="footer-icon" url="http://facebook.com/jaketrent" />
                        <SocialIcon className="footer-icon" url="http://instagram.com/jaketrent" />
                        <SocialIcon className="footer-icon" url="http://youtube.com/jaketrent" />
                        <SocialIcon className="footer-icon" url="http://github.com/jaketrent" />
                    </h3>
                </div>
            </div>
        );
    }
}