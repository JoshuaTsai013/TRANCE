import React from "react";
import './styles/music.css'
import Footer from '../../components/Footer'
function MusicContent() {
    return (
        <div id="musicLayout">
            <div id="musicsideBar"></div>
            <div id="musicContentArea">
                <div className="musicBanner"></div>
                    <div id="musicItem">
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                        <div className="musicItems"></div>
                    </div>
                <Footer/>
            </div>
            {/* <div id="musicItems"></div> */}
        </div>
    );
}

export default MusicContent;