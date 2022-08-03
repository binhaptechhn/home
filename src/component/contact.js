import React from 'react';
import "../css/contact.css";
export default function Contact() {
    return (
        <div class="contact" style={{
            backgroundImage: "url('/img/Background\ Bubble\ \(1\).png')",
        }}>
        <div class="contact-main">
            <div class="contact-img">
                <img src="./img/Contact Animations.png" alt=""></img>
            </div>
        <div class="contact-form">
            <div class="contact-form-title">
                <div class="contact-form-title-header">Contact Us</div>
                <div class="contact-form-title-heading">Lorem ipsum dolor sit amet consectetur</div>
                <div class="contact-form-title-text">Lorem ipsum dolor sit amet consectetur</div>
            </div>
            <div class="contact-form-input">
                <input type="text" class="input-top" placeholder="Frist name"></input>
                <input type="text"class="input-top" placeholder="Last name"></input>
                <input type="email" class="input-mid"placeholder="Email address"></input>
                <input type="text"class="input-mid"placeholder="subject message"></input>
                <input type="text"class="input-buttom"placeholder="Your inquiry here"></input>
                <button>Send Message</button>
            </div>
        </div>
        </div>
    </div>
    )
}