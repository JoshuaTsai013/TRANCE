import Header from "../components/Header";
import AboutContent from "../components/AboutContent";

function About() {
    return (
        <div className="main-layout">
            <div className="layout-header">
                <Header />
            </div>
            <div className="layout-content">
                <AboutContent />
            </div> 
        </div>
    );
}

export default About