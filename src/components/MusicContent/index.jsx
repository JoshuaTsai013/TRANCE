import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/music.css'
import Footer from '../../components/Footer'
import CarouselImage1 from '../../assets/images/Cimage1.png'
import CarouselImage2 from '../../assets/images/Cimage2.png'
import CarouselImage3 from '../../assets/images/Cimage3.png'

import { CCarousel, CCarouselItem, CImage } from '@coreui/react'


function MusicContent() {
    return (
        <div id="musicLayout">
            <div id="musicsideBar"></div>
            <div id="musicContentArea">
                <div className="musicBannerFrame">
                    <CCarousel controls indicators transition="crossfade">
                        <CCarouselItem>
                            <CImage style={{ width: "100%" }} src={CarouselImage1} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage style={{ width: "100%" }} src={CarouselImage2} alt="slide 2" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage style={{ width: "100%" }} src={CarouselImage3} alt="slide 3" />
                        </CCarouselItem>
                    </CCarousel>
                </div>
                <Row style={{ width: "100%", paddingLeft: "12px", paddingRight: "12px", paddingBottom: "12px", margin: "0" }}>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                    <Col sm={12} md={6} lg={4} xl={2} className="musicItemFrame"><div className="musicItem"></div></Col>
                </Row>

                <div style={{ height: "360px" }}><Footer /></div>

            </div>
        </div>
    );
}

export default MusicContent;