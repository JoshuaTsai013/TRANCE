import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  

    return (
        <div>
            

            <ScrollToTop />
            <div>
                <Header />
                <HomeContent />
            </div>
        </div>
    );
}

export default Home