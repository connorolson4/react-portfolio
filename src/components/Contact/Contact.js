import React, { useState } from 'react';
import "./Contact.css";
import axios from "axios";
import { faAllergies } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [alert, setAlert] = useState("");


    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setContactForm({
          ...contactForm,
          [name]: value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (contactForm.name === "" || contactForm.email === "" || contactForm.message === "") {
            setAlert("incomplete");
        }
        else if (!pattern.test(contactForm.email)) {
            setAlert("valid-email");
        }
        else {
            axios.post('https://co-portfolio-backend.herokuapp.com/send', contactForm).then(response => {
                console.log(response);
                setAlert("success");
            }).catch(err => console.log(err));

            setContactForm ({
                name: "",
                email: "",
                message: ""
            })
        }
    }

    return (
        <div className="contact">
            <h1 id="contact-header">LET'S TALK</h1>
            <p className="contact-subheader">I'D LOVE TO MEET YOU AND LEARN ABOUT WHAT YOU'RE DOING. YOU CAN REACH ME ON LINKEDIN OR BY EMAIL. THANK YOU!</p>
            <section id="alert">
                <p style={alert==="incomplete" ? {display:'block'} : {display:'none'}}>PLEASE COMPLETELY FILL OUT THE CONTACT FORM</p>
                <p style={alert==="valid-email" ? {display:'block'} : {display:'none'}}>PLEASE ENTER A VALID EMAIL ADDRESS</p>
                <p style={alert==="success" ? {display:'block'} : {display:'none'}}>YOU HAVE SUCCESSFULLY SENT CONNOR AN EMAIL!</p>
            </section>
            <div className="contact-blend"></div>
            <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div id="name-email">
                    <div className="label" style={{marginRight: "4%"}}>
                    <label htmlFor="name">FULL NAME</label>
                    <input value={contactForm.name} onChange={handleInputChange} type="text" id="name" name="name"/>
                    </div>
                    <div className="label">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input value={contactForm.email} onChange={handleInputChange} type="text" id="email" name="email"/>
                    </div>
                    </div>
                    <div id="message-label">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea value={contactForm.message} onChange={handleInputChange} type="text" id="message" name="message"/>
                    </div>
                    <input type="submit" id="contact-btn" value="SEND"/>
                </form>
            </div>
        </div>
    )
}

export default Contact

// I'D LOVE TO HEAR ABOUT YOUR IDEAS ! FEEL FREE TO FILL OUT THE CONTACT FORM TO SEND ME AN EMAIL OR YOU CAN REACH OUT VIA MY GITHUB, FACEBOOK, OR LINKEDIN!
