import './styles/Footerstyle.css';
import { FacebookOutlined, InstagramOutlined, PrinterOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-up" style={{ display: "flex", justifyContent: "center" }}>
                <div className="footer-down">
                    <div className="your-home footer-container">
                        <h4 className="header-title" style={{ margin: "0" }}>TRANCE</h4>
                        <p className="header-title" style={{ margin: "0", fontSize: "5px" }}>Everything you want is here.</p>

                    </div>
                    <div className="hn footer-down-right">
                        <div className="icons ">
                            <a href="https://www.pinterest.com/paviliongift/" className='footer-icon' target="_blank" title="youtube" itemProp="significantLink"><YoutubeOutlined /></a>
                            <a href="https://www.facebook.com/paviliongift" className='footer-icon' target="_blank" title="Facebook" itemProp="significantLink"><FacebookOutlined /></a>
                            <a href="https://twitter.com/PavilionGiftCo" className='footer-icon' target="_blank" title="Twitter" itemProp="significantLink"><TwitterOutlined /></a>
                            <a href="http://instagram.com/paviliongiftcompany" className='footer-icon' target="_blank" title="Instagram" itemProp="significantLink"><InstagramOutlined /></a>
                        </div>

                        <div className="licontainer">
                            <div className="footer-options">
                                <ul className="footer-about">
                                    <li style={{ marginBottom: "0.5rem" }} className="options-title">ABOUT</li>
                                    <li className="options"></li>
                                    <hr className="footer-line-2" />
                                    <li className="options">About</li>
                                    <li className="options">Story</li>
                                    <li className="options">Contact us</li>
                                    <li className="options">Careers</li>
                                </ul>

                                <ul className="footer-about">
                                    <li style={{ marginBottom: "0.5rem" }} className="options-title">SHOP</li>
                                    <li className="options"></li>
                                    <hr className=" footer-line-2" />
                                    <li className="options">Precautions</li>
                                    <li className="options">Newsletter</li>
                                    <li className="options">Wholesale Program</li>
                                    <li className="options">Trade Program</li>
                                </ul>

                                <ul className="footer-about">
                                    <li style={{ marginBottom: "0.5rem" }} className="options-title">SUPPORT</li>
                                    <li className="options"></li>
                                    <hr className=" footer-line-2" />
                                    <li className="options">Costomers</li>
                                    <li className="options">Contact</li>
                                </ul>

                                <ul className="footer-about">
                                    <li style={{ marginBottom: "0.5rem" }} className="options-title">NEWS</li>
                                    <li className="options"></li>
                                    <hr className=" footer-line-2" />
                                    <li className="options">News</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <hr className=" footer-line " />
                        <p className=" copyright " style={{ marginBottom: "4.5rem" }}>Copyright © 2023 TRANCE All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </footer>


    );
}