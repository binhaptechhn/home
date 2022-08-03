import React from 'react';
import "../css/secsion.css";
export default function Main() {
    return (
        <div class="main-slider" className="main-slider" style={{
            backgroundImage: "url('/img/1Background.png')",
        }}>
            <div class="main-slider-content">
                <div class="frame-main" style={{
                    backgroundImage: "url('/img/Frame 1.png')",
                }}></div>
                <div class="clinic">Clinic & beauty consultant</div>
                <div class="a-long">It is a long established fact that a reader will be by the readable content of a page.
                </div>
                <div class="more">
                    <button>More Deltails</button>
                </div>
                <div class="slider-btn">
                    <span></span>
                    <button>
                    </button>
                    <span></span>
                </div>
            </div>

        </div>
    )
}