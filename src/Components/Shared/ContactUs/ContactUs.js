import React from 'react';
import map from '../../../image/map.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="container mt-5">

            <div className="row  contact-container">
                <div className="col-md-6 ">
                    <div>
                    <img src={map} alt=""/>
                    </div>
                </div>

                <div className="col-md-6">
                    <div>
                    <h2>Contact Us:</h2>
                    <ul className="list-unstyled mt-4">
                        <li>
                            <FontAwesomeIcon style={{ fontSize: '20px'}} icon={faMapMarkerAlt} /> <span>Visit Us: New York, United States, NY</span>
                            <br/><small className ="text-secondary">123 New Lenox Village, Chicago, Illinois 60606</small>
                        </li>
                        <li>
                        <FontAwesomeIcon style={{ fontSize: '20px'}}  icon={faPhoneAlt} /> <span>Call Us: 800-123-4567, 800-123-4568</span>
                            <br/><small className ="text-secondary">You may call us everyday from 9 a.m. till 7 p.m</small>
                        </li>
                        <li>
                        <FontAwesomeIcon style={{ fontSize: '20px'}}  icon={faEnvelope} /> <span>Mail Us: info@yoursitename.com</span>
                            <br/><small className ="text-secondary">Is there any question you would like to ask us?</small>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;