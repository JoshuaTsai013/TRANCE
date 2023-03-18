import Header from "../components/Header";
import ShopContent from "../components/ShopContent";

function Shop() {
    return (
        <div className="main-layout">
            <div className="layout-header">
                <Header />
            </div>
            <div className="layout-content">
                <ShopContent />
            </div> 
        </div>
    );
}

export default Shop