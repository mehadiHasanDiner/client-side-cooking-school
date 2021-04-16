import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';






const Footer = () => {
    return (
        <section className ="footer-container mt-2">
            <div className="container ">
                <div className="row ">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div>
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
                <div className="col-md-6  d-flex align-items-center justify-content-end">
                    <div>
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlus} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;