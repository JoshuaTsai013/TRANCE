import './styles/Typelist.css';
import React, { useState } from "react";

function TextBlock() {
    return (
        <div id="textblock">
            
            <h1 id="textblock-title">TYPELIST <br /><br /></h1>
            <p id="textblock-p">everything you want is here. </p>
            <div id="textblock-content">
                <div className="card ">
                    <div className="circle"></div>
                    <div className="content">
                        <h2>MUSIC</h2>
                        <p>Listen to the music you want to hear, <br />do what you want to do.
                        </p>
                        <a href="#">Listen Now</a>
                    </div>
                    <img src="./images/CD.png" alt="" />
                </div>

                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h2>3D MODEL</h2>
                        <p>Collect different models and provide free downloads <br />for you to learn!
                        </p>
                        <a href="#">Visit Now</a>
                    </div>
                    <img src="./images/house.png" alt="" />
                </div>



                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h2>SHOP</h2>
                        <p>TRANCE has a special course selling service to <br />enable you to learn effectively.</p>
                        <a href="#">Buy Now</a>
                    </div>

                    <img src="./images/shop.png" alt="" />
                </div>



                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h2>ABOUT US</h2>
                        <p>Various information and contact information <br />about TRANCE.
                        </p>
                        <a href="#">Visit Now</a>
                    </div>
                    <img src="./images/about.png" alt="" />
                </div>
            </div>
        </div >
    );
}

export default TextBlock;