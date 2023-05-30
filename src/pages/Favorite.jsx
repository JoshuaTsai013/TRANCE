import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Favoriteitem from "../components/Collection/index.jsx"
import ScrollToTop from '../components/ScrollToTop';
import Footer from "../components/Footer";



function Favorite() {



    return (
        <>
            <ScrollToTop />
            <div>
                <Header />
                <Favoriteitem />
                <Footer />
            </div>
            <Helmet><title>Favorite</title></Helmet>
        </>
    );
}

export default Favorite