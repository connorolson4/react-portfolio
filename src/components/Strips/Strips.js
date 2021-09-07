import React from 'react';
import "./Strips.scss";
import { useSpring, animated } from 'react-spring';
import prepercolatorscreen from "../../media/prepercolator-screenshot.png"
import perfecthomescreen from "../../media/perfecthome-screenshot.png"
import weatherscreen from "../../media/weather-screenshot.png"
import hoprscreen from "../../media/hopr-screenshot.png"
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';

const interp = i => r => `translate3d(${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0, 0)`

function Strips() {
    const { radians } = useSpring({
        to: async next => {
          while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    });
    const projects = [
        {
            title: "PREPERCOLATOR",
            information: "An application for ordering coffee. Enables users to save their favorite drink combinations.",
            id: 1,
            screenshot: prepercolatorscreen,
            repo: "https://github.com/davidlucio/prepercolator",
            deploy: "https://prepercolator.herokuapp.com",
        },
        {
            title: "PerfectHome",
            information: "A site for matching adoptable pets to matching owners based on criteria the user defines.",
            id: 2,
            screenshot: perfecthomescreen,
            repo: "https://https://github.com/KeithMurph/PerfectHome",
            deploy: "https://perfect-home-finder.herokuapp.com/",
        },
        {
            title: "Hop'r",
            information: "An application that locates breweries nearest the user.",
            id: 3,
            screenshot: hoprscreen,
            repo: "https://github.com/davidlucio/breweryfinder",
            deploy: "https://davidlucio.github.io/breweryfinder/",
        },
        {
            title: "Weather Dashboard",
            information: "An app that gets weather information for the specified location.",
            id: 4,
            screenshot: weatherscreen,
            repo: "https://github.com/connorolson4/weather-dashboard",
            deploy: "https://connorolson4.github.io/weather-dashboard/",
        },
    ]
    return (
        <div className="strips">
            {projects.map((project, i) => (
                <div key={i} className="strip-item">
                    <animated.div className="strip-content" style={{ transform: radians.interpolate(interp(i)) }}>
                        <div className="project-pic" style={{ background: `url(${project.screenshot})` }}></div>
                        <div className="project-info">
                            <h1>{project.title}</h1>
                            <h3>DESCRIPTION</h3>
                            <p>{project.information}</p>                      
                        </div>
                    </animated.div>
                </div>
            ))}
        </div>
    )
}

export default Strips
