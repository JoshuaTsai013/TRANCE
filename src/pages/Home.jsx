
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeContent from "../components/Homecontent/HomeContent";
import '.././index.css';

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