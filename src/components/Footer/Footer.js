import React from 'react';
import "./Footer.css";
import logo from "../../media/reactlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer" id="contact-hash">
            <div className="contact-info">
                <a target="_blank" href="https://github.com/connorolson4" className="contact-links"><FontAwesomeIcon className="contact-icon" icon={faGithub}/></a>
                <a target="_blank" href="https://www.linkedin.com/in/connorolson4/" className="contact-links"><FontAwesomeIcon className="contact-icon" id="linkedin-icon" icon={faLinkedin}/></a>
                <Link to="/contact" className="contact-links"><FontAwesomeIcon className="contact-icon" icon={faEnvelope}/></Link>
            </div>
            <p id="footer-message" style={{marginBottom: '2.5rem'}}>VISIT MY SOCIALS TO LEARN MORE ABOUT ME OR TO START A CONVERSATION</p>
            <p style={{fontWeight:'bold', letterSpacing:'0.15rem'}}>CONNOR OLSON</p>
            <p style={{marginTop: '1rem'}}><small> &#169; COPYRIGHT 2021</small></p>
            <div style={{display:'flex', justifyContent:'center', marginTop:'0.4rem'}}>
                <p style={{paddingTop:'0.3rem'}}><small>MADE WITH</small></p>
                &nbsp;
                <img id="react-logo" src={logo} alt="react logo"/>
            </div>
        </div>
    )
}

export default Footer
