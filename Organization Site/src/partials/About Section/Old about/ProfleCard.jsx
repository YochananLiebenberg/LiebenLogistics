import React from 'react';
import './AboutSection.css';
import {Link} from "react-router-dom";

export default function Card({ props, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-back">

                {/* Contact details */}
                <ul>
                    <div className="contact-line">
                        <li className="contact-title">Email</li>
                        <li className="contact-details">{props.email}</li>
                    </div>
                    <div className="contact-line">
                        <li className="contact-title">Phone</li>
                        <li className="contact-details">{props.phone}</li>
                    </div>


                    {/* Social links */}
                    <div className="contact-line">
                        <a href={props.linkedin} target="_blank" className="contact-line-link">
                            <img src="https://uploads-ssl.webflow.com/602e7c287eefab52cb3f36dd/602ec3d193cf5ffb77ae7e12_LinkedIN.png" loading="lazy" alt="Imaginary Cloud Linkedin "></img>
                            <div className="social-link">LINKEDIN</div>
                        </a>
                    </div>

                </ul>

            </div>

            <div style={{ backgroundImage: props.profile_img, backgroundSize: "cover"}} className="card-front">

            </div>


        </div>
    );
}
