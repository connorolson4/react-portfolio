import React from 'react';
import "./About.css";
import bioImg from "../../media/bioimg.JPG";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

function About() {
    return (
        <div className="about-container" id="about-hash">
            <section className="short-bio">
                <div className="bio-content-container">
                <div className="bio-pic" style={{backgroundImage: `url(${bioImg})`}}>
                </div>
                {/* <img className="bio-pic" src={bioImg} alt="bio picture"/> */}
                <div className="bio-content">
                    
                    <p>Thanks for stopping by, my name is Connor Olson and I am a full stack developer. I have worked on several projects and am continuing to learn and build applications. I have a bachelor's degree from the Syracuse University School of Information Studies in Information Management and Technology. <br/><br/>I love networking technology and coding. I've always been fascinated by the internet, and love learning about how it functions, and building applications that can run on it!<br/><br/>Please reach out if you want to connect. I love meeting new people and hearing about their backgrounds!</p>
                </div>
                </div>
            </section>
            <div className="blend">
            </div>
            <Skills/>
            <Footer/>
        </div>
    )
}

export default About
