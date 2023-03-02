import './styles/Parallax.css';
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
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur
                        </p>
                        <a href="#">Listen Now</a>
                    </div>
                    <img src="./images/CD.png" alt="" />
                </div>

                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h2>3D MODEL</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur
                        </p>
                        <a href="#">Visit Now</a>
                    </div>
                    <img src="./images/house.png" alt="" />
                </div>

                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h2>LEARNING</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur
                        </p>
                        <a href="#">Visit Now</a>
                    </div>
                    <img src="./images/learn.png" alt="" />
                </div>
                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h2>SHOP</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur
                        </p>
                        <a href="#">Buy Now</a>
                    </div>

                    <img src="./images/shop.png" alt="" />
                </div>

                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h2>ARTWORK</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur
                        </p>
                        <a href="#">Learn Now</a>
                    </div>
                    <img src="./images/Art.png" alt="" />
                </div>

                <div className="card">
                    <div className="circle"></div>
                    <div className="content">
                        <h2>ABOUT US</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. iustoLorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque itaque, consequuntur
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