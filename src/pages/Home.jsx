import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

function Home() {
    return (
        <>
            <Header />
            <HomeContent />
            <Helmet><title>TRANCE</title></Helmet>
        </>
    );
}

export default Home