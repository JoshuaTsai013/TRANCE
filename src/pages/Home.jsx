import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import { useEffect } from "react";
import Chatbot from "../components/Chatbot/Chatbot";



function Home() {
    const handleWheel = (event) => {
        console.log('scrolling');

    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [handleWheel]);

    return (
        <>
           
            <Header />
            
            <Chatbot />
            <HomeContent />
            <Helmet><title>TRANCE</title></Helmet>
        </>
    );
}

export default Home