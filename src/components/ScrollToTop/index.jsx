
import React from 'react';
import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

import './ScrollToTop.css';



const ScrollToTop = () => {

    
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btn">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goTop}
                />
            )}{" "}
        </div>
    );
};

export default ScrollToTop