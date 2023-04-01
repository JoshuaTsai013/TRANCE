import Header from "../components/Header";
import MusicContent from "../components/MusicContent";
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
function Music() {
    return (
        <div>
            <ScrollToTop />
            <div>
                <Header />
                <MusicContent />
            </div>
        </div>
    );
}

export default Music