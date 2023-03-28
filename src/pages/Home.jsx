import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

function Home() {
    return (
        <div className="main-layout">
            <div className="layout-header">
                <Header />
            </div>
            <div className="layout-content">
                <HomeContent />
            </div>
        </div>
    );
}

export default Home