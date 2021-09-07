import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./Header.sass";
import Typing from "react-typing-animation";
import logo from "../../media/logo.png";
import { useSpring, useTransition, animated } from "react-spring";
import SelectInput from '@material-ui/core/Select/SelectInput';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 45}px, ${y / 45}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 30 + 35}px, ${y / 30}px, 0)`; 

const logoContainer = () => (
    <div id="logo-container">
        <img src={logo} alt="logo" id="logo"/>
    </div>
);

function Header() {
    // const [items, setItems] = useState([]);
    // const items = useRef([]);
    const sleep = t => new Promise(res => setTimeout(res, t));
    const transitions = useTransition([logoContainer()], null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
        enter: i => async next => {
            await sleep(3900);
            await next({opacity: 1, height: 200, innerHeight: 200});
        },
        // [
        //   { opacity: 1, height: 100, innerHeight: 100 }
        // ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        config: {
            duration: 800
        }
    });

    const TypingComponent1 = () => (
        <Typing speed={150}>
            <h1 className="welcome">WELCOME</h1>
            {/* <div className="subheader">
            <Typing.Speed ms={60}/>
            <h1>MY NAME IS CONNOR OLSON</h1>
            </div> */}
        </Typing>
    );
    const TypingComponent2 = () => (
        <Typing speed={60}>
            <Typing.Delay ms={1500}/>
            <div className="subheader">
            <h1>MY NAME IS CONNOR OLSON</h1>
            </div>
        </Typing>
    );
    
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 }}));

    // useEffect(() => {
    //     setTimeout(() => {
    //         setItems([logoContainer()]);
    //     //   items.current = [logoContainer()];
    //     //   console.log(items.current);
    //     }, 2000);
    // },[]);

    return (
        <div className="header-container" id="header-hash" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y)})}>
            <animated.div className="header-background" style={{ transform: props.xy.interpolate(trans1) }}/>
            <div className="header-content">
                <animated.div className="typing-comp" style={{ transform: props.xy.interpolate(trans2) }}>
                    <TypingComponent1/>
                    {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                        <animated.div className="transitions-item" key={key} style={rest}>
                        <animated.div style={{height: innerHeight, display:'table', width:'100%' }}>{item}</animated.div>
                        </animated.div>
                    ))}
                    <TypingComponent2/>
                </animated.div>
                <div className="typing-comp2">
                    <TypingComponent1/>
                    <TypingComponent2/>
                    <div id="logo-container">
                        <img src={logo} alt="logo" id="logo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header