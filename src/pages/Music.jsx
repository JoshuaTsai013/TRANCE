import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import MusicContent from "../components/MusicContent";
import ScrollToTop from '../components/ScrollToTop';

function Music() {
    return (
        <div>
            <ScrollToTop />
            <div>
                <Header />
                <MusicContent />
            </div>
            <Helmet><title>Music</title></Helmet>
        </div>
    );
}

export default Music