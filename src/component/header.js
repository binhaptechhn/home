import React from 'react';
import "../css/header.css";
export default function Header() {
    return (
        <header id='back-to-top'>
            <div className="main-logo">
                <img src="/img/Footer Logo.png" alt=""/>
            </div>
            <div className="main-menu">
                <ul>
                    <li>Home <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg></li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Gallery</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="contact-btn">Contact</div>
        </header>
    )
}