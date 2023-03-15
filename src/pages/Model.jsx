import Header from "../components/Header";
import ModelContent from "../components/ModelContent";

function Model() {
    return (
        <div className="main-layout">
            <div className="layout-header">
                <Header />
            </div>
            <div className="layout-content">
                <ModelContent />
            </div> 
        </div>
    );
}

export default Model