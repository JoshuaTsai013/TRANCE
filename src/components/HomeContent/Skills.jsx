
import Col from "react-bootstrap/esm/Col";
import{Container,Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../../../public/images/meter1.svg";
import meter2 from "../../../public/images/meter2.svg";
import meter3 from "../../../public/images/meter3.svg";
import './styles/skills.css';

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium asperiores inventore, <br />quibusdam enim dolorem aperiam porro corrupti nobis sit dignissimos facilis. Reiciendis numquam voluptatibus dolor. Omnis, dolores! Blanditiis, natus!</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Music production</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>3D modeling</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Graphic design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}