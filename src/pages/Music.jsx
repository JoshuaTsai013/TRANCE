import Header from "../components/Header";
import MusicContent from "../components/MusicContent";
import Footer from '../components/Footer'

function Music() {
    return (
        <div className="main-layout">
            <div className="layout-header">
                <Header />
            </div>
            <div className="layout-content">
                <MusicContent />
            </div> 
            <Footer />
        </div>
    );
}

export default Music