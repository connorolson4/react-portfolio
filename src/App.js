import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path="/">
          <Header/>
          <About/>
        </Route>
        <Route path="/portfolio">
          <Portfolio/>
          <Footer/>
        </Route>
        <Route path="/contact">
          <Contact/>
          <Footer/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;