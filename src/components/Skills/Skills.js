import React from 'react';
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCogs, faAtom } from "@fortawesome/free-solid-svg-icons";
// import { useSpring, animated } from 'react-spring'

// const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;
// const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Skills() {
    // const { radians } = useSpring({
    //     to: async next => {
    //       while (1) await next({ radians: 2 * Math.PI })
    //     },
    //     from: { radians: 0 },
    //     config: { duration: 3000 },
    //     reset: true,
    // });
    // const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (
        <div className="skills">
            <section className="skills-container">
                <div className="skills-col" style={{color:'#aaabb8'}}>
                    <div className="skills-header">
                    <FontAwesomeIcon className="faIcon" icon={faLaptopCode} />
                    <h2>FRONT-END</h2>
                    </div>
                    <div className="lang-tools">
                    <div className="languages">
                    <h3><span className="middot">&middot;&middot;&middot;</span> LANGUAGES <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">HTML<br/>CSS<br/>JAVASCRIPT<br/>JQUERY<br/>JSX<br/>HANDLEBARS<br/>SCSS/SASS</h4>
                    <h4 className="horz">HTML &middot; CSS &middot; JAVASCRIPT &middot; JQUERY &middot; JSX &middot; HANDLEBARS &middot; SCSS/SASS</h4>
                    </div>
                    <div className="tools">
                    <h3><span className="middot">&middot;&middot;&middot;</span> TOOLS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">REACT.JS<br/>BOOTSTRAP<br/></h4>
                    <h4 className="horz">REACT.JS &middot; BOOTSTRAP &middot; MATERIAL-UI &middot; MATERIALIZE</h4>
                    </div>
                    </div>
                </div>
                <div className="skills-col" style={{color:'#7395ae'}}>
                    <div className="skills-header">
                    <FontAwesomeIcon className="faIcon" icon={faCogs} />
                    <h2>BACK-END</h2>
                    </div>
                    <div className="lang-tools">
                    <div className="languages">
                    <h3><span className="middot">&middot;&middot;&middot;</span> LANGUAGES <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">JAVASCRIPT<br/>SQL<br/>MQL</h4>
                    
                    </div>
                    <div className="tools">
                    <h3><span className="middot">&middot;&middot;&middot;</span> TOOLS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">MYSQL<br/>MYSQL WORKBENCH<br/>MONGODB<br/>MONGO ATLAS<br/>EXPRESS<br/>NODE<br/></h4>
                   
                    </div>
                    </div>
                </div>
                <div id="col3" className="skills-col" style={{color:'#b1a296'}}>
                    <div className="skills-header">
                    <FontAwesomeIcon id="atom" className="faIcon" icon={faAtom} />
                    <h2>NETWORKING</h2>
                    </div>
                    <div className="lang-tools">
                    <div className="languages">
                    <h3><span className="middot">&middot;&middot;&middot;</span> PROTOCOLS <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">TCP/IP<br/>DNS<br/>HTTP<br/>EIGRP<br/>OSPF</h4>
                    
                    </div>
                    <div className="tools">
                    <h3><span className="middot">&middot;&middot;&middot;</span> SOFTWARE <span className="middot">&middot;&middot;&middot;</span></h3>
                    <br/>
                    <h4 className="vert">AIRWAVE<br/>CLEARPASS</h4>
                    
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
