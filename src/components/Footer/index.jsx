import styles from './Footerstyle.module.css';
import { FacebookOutlined, InstagramOutlined, PrinterOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <footer className={styles.footer} col-sm-12 col-md-6>
            <div className={styles.footerUp}>
                <div className={styles.footerDown}>
                    <div className={styles.yourHome}>
                        <h4 className={styles.headerTitle} style={{ margin: "0" }}>TRANCE</h4>
                        <p className={styles.headerTitle} style={{ margin: "0", fontSize: "5px" }}>Everything you want is here.</p>

                    </div>
                    <div className={styles.footerDownRight}>
                        <div className={styles.icons}>
                            <a href="#" className={styles.footerIcon} target="_blank" title="youtube" itemProp="significantLink"><YoutubeOutlined /></a>
                            <a href="#" className={styles.footerIcon} target="_blank" title="Facebook" itemProp="significantLink"><FacebookOutlined /></a>
                            <a href="#" className={styles.footerIcon} target="_blank" title="Twitter" itemProp="significantLink"><TwitterOutlined /></a>
                            <a href="#" className={styles.footerIcon} target="_blank" title="Instagram" itemProp="significantLink"><InstagramOutlined /></a>
                        </div>

                        <div className={styles.licontainer}>
                            <div className={styles.footerOptions}>
                                <ul className={styles.footerAbout}>
                                    <li style={{ marginBottom: "0.5rem" }} className={styles.optionsTitle}>ABOUT</li>
                                    <li className={styles.options}></li>
                                    <hr className={styles.footerlineTwo} />
                                    <li className={styles.options}>About</li>
                                    <li className={styles.options}>Partners</li>
                                    <li className={styles.options}>Contact us</li>
                                   
                                </ul>

                                <ul className={styles.footerAbout}>
                                    <li style={{ marginBottom: "0.5rem", marginLeft: "0.5rem" }} className={styles.optionsTitle}>SHOP</li>
                                    <li className={styles.options}></li>
                                    <hr className={styles.footerlineTwo} />
                                    <li className={styles.options}>Precautions</li>
                                    <li className={styles.options}>Newsletter</li>
                                    
                                </ul>

                                <ul className={styles.footerAbout}>
                                    <li style={{ marginBottom: "0.5rem" }} className={styles.optionsTitle}>MUSIC</li>
                                    <li className={styles.options}></li>
                                    <hr className={styles.footerlineTwo} />
                                    <li className={styles.options}>Saved</li>
                                    <li className={styles.options}>Liked</li>
                                </ul>

                                <ul className={styles.footerAbout}>
                                    <li style={{ marginBottom: "0.5rem" }} className={styles.optionsTitle}>NEWS</li>
                                    <li className={styles.options}></li>
                                    <hr className={styles.footerlineTwo} />
                                    <li className={styles.options}>News</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <hr className={styles.footerline} />
                        <p className={styles.copyright} style={{ marginBottom: "0.5rem" }}>Copyright © 2023 TRANCE All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}