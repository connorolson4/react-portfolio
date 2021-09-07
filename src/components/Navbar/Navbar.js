import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFileAlt, faComment, faFolderOpen} from "@fortawesome/free-solid-svg-icons";
import resume from "../../media/connorolsonresumeseptember21.pdf";
import logo from "../../media/logowhite.png";
import logodark from "../../media/logodark.png";

function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        })
    }, [])

    return (
        <div className="navbar-container">
            <div className={`regular-navbar ${show && 'nav-grey'}`}>
                <div className="nav-left">
                    <HashLink id="connor" to="/#header-hash">{!show ? <img src={logo} alt="logo" className="contact-logo"/> : <img src={logodark} alt="logo" className="contact-logo"/>}</HashLink>
                </div>
                <div className="nav-right">
                    <div className="nav-option">
                        <HashLink to="/#about-hash" id="about">ABOUT</HashLink>
                    </div>
                    <div className="nav-option">
                        <Link to="/portfolio" id="portfolio">PORTFOLIO</Link>
                    </div>
                    <div className="nav-option">
                        <a target="_blank" href={resume}>RESUME</a>
                    </div>
                    <div className="nav-option">
                        <Link to="/contact" id="contact">CONTACT</Link>
                    </div>
                </div>
            </div>
            <div className="mobile-nav">
                <div className="mobile-nav-option">
                    <HashLink to="/#header-hash" style={{display:'flex',flexDirection:'column'}}><span><FontAwesomeIcon className="mobile-icon" icon={faHome} /></span>HOME</HashLink>
                </div>
                <div className="mobile-nav-option">
                    <HashLink to="/#about-hash" style={{display:'flex',flexDirection:'column'}}><span><FontAwesomeIcon className="mobile-icon" icon={faUser} /></span>ABOUT</HashLink>
                </div>
                <div className="mobile-nav-option">
                    <Link to="/portfolio" style={{display:'flex',flexDirection:'column'}}><span><FontAwesomeIcon className="mobile-icon" icon={faFolderOpen} /></span>PORTFOLIO</Link>
                </div>
                <div className="mobile-nav-option">
                    <a target="_blank" href={resume} style={{display:'flex',flexDirection:'column'}}><span><FontAwesomeIcon className="mobile-icon" icon={faFileAlt} /></span>RESUME</a>
                </div>
                <div className="mobile-nav-option">
                    <Link to="/contact" style={{display:'flex',flexDirection:'column'}}><span><FontAwesomeIcon className="mobile-icon" icon={faComment} /></span>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar