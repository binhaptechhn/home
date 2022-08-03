import React from 'react';
import "../css/aboutUs.css";
export default function AboutUs() {
    return (
        <div class="about-us"
        style={{
            backgroundImage: "url('/img/BackgroundBubble.png')",
        }}
        >
            <div class="about-us-content">
                <div class="about-us-title">
                    <div class="about-us-title-header">About Us</div>
                    <div class="about-us-title-heading">We are the best beauty clinic</div>
                    <div class="about-us-title-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Autem consequatur quod dicta perferendis rerum facilis reprehenderit sequi commodi
                        impedit animi placeat quia iure, porro soluta obcaecati ea
                        rum quaerat, voluptatem voluptatum.
                        <br></br>
                        <br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div class="about-us-btn-watch">
                        <div class="about-us-btn">
                            <button>More Deltails</button>
                        </div>
                        <div class="about-us-watch">
                            <img src="./img/Play_button.png" alt=""></img>
                                <p>Watch Video</p>
                        </div>
                    </div>
                </div>
                <div class="about-us-img">
                    <img src="./img/unsplash_LRXYS0tSyGc.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}