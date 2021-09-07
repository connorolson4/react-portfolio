import React from 'react';
import "./Portfolio.css";
import Cards from "../Cards/Cards";
import Strips from "../Strips/Strips";

function Portfolio() {

    return (
        <div className="portfolio-container" id="portfolio-hash">
            <h1>PORTFOLIO</h1>
            <section className="card-container">
                <Cards/>
            </section>
        </div>
    )
}

export default Portfolio
