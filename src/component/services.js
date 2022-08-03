import React from 'react';
import "../css/services.css";
export default function Services() {
    return (
        <div className="core-services">
        <div className="title-desc">
            <div className="main-sevices">Main Sevices</div>
            <div className="learn">Lorem ipsum dolor sit amet consectetur adipisicing </div>
            <div className="prota">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        </div>
        <div className="box">
            <div className="box-section">
                <div className="animation">
                    <img src="./img/Animation1.png" alt=""></img>
                </div>
                <div className="beauty">Beauty consultation</div>
                <div className="non-parturient">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            </div>
            <div className="box-section">
                <div className="animation">
                    <img src="./img/Animation2.png" alt=""></img>
                </div>
                <div className="beauty">Beauty consultation</div>
                <div className="non-parturient">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            </div>
            <div className="box-section">
                <div className="animation">
                    <img src="./img/Animation3.png" alt=""></img>
                </div>
                <div className="beauty">Beauty consultation</div>
                <div className="non-parturient">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            </div>
        </div>
    </div>
    )
}