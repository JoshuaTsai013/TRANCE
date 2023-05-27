import React, { useState } from "react";
import { FaUser, FaStar, FaMusic, FaQuestion } from "react-icons/fa";
import "./styles/User.css";

function UserContent() {
  const [name, setName] = useState("WEN");
  const user = {
    age: 20,
    email: "ss23094527@gmail.com",
    // 其他用戶資料...
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="User">
      <div className="user-profile">
        <h1 className="user-title">User Profile</h1>
        <div className="user-icon">
          <img src="https://img.onl/7N2dFr" alt="User Avatar" className="user-icon" />
        </div>
        <div className="user-info">
          <h1>
            <strong> {name}</strong>
          </h1>
         
        </div>
      </div>
     
      <div className="user-footer">
        <div className="footer-section">
          <FaUser className="nav-icon" />
          <span>PERSONAL INFORMATION</span>
        </div>
        <div className="footer-section">
          <FaStar className="nav-icon" />
          <span>MY COLLECTION</span>
        </div>
        <div className="footer-section">
          <FaMusic className="nav-icon" />
          <span>MY PLAYLIST</span>
        </div>
        <div className="footer-section">
          <FaQuestion className="nav-icon" />
          <span>MY QUESTION</span>
        </div>
      </div>
     
    </div>
  );
}

export default UserContent;
