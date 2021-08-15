import React from 'react';
import './Footer.css';
import logo from '../../image/logo.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="row">

                <div className="col-md-6">
                    <div className="half-width">
                        <img src={logo} alt="" />

                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="half-width">
                        <div className="footer-content ">
                            <ul>
                                <li>About Online food</li>
                                <li>Read our blog</li>
                                <li>Sign up to delivery</li>
                                <li>Add your restaurant</li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-md-6"> */}
                        <div className="footer-content ">
                            <ul>
                                <li>Get help</li>
                                <li>Read FAQs</li>
                                <li>View all cities</li>
                                <li>restaurant near me</li>
                            </ul>
                        </div>
                    {/* </div> */}
                </div>
                <small class="footer-copy">copyright © 2021 - Online food</small>
            </div>
        </div>

    );
};

export default Footer;