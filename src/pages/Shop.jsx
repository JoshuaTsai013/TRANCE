import Header from "../components/Header";
import ShopContent from "../components/ShopContent";
import Footer from '../components/Footer'

function Shop() {
    return (
        <div className="main-layout">
            <div className="layout-header">
                <Header />
            </div>
            <div className="layout-content">
                <ShopContent />
            </div> 
            <Footer />
        </div>
    );
}

export default Shop