import Header from "../components/Header";
import MusicContent from "../components/MusicContent";

function Music() {
    return (
        <div className="main-layout">
            <div className="layout-header">
                <Header />
            </div>
            <div className="layout-content">
                <MusicContent />
            </div> 
        </div>
    );
}

export default Music