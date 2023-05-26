import React from "react";
import "./styles/User.css";

function UserContent() {
  const user = {
    name: "WEN",
    age: 20,
    email: "ss23094527@gmail.com",
    // 其他用戶資料...
  };

  return (
    <div className="User">
    <div className="user-profile">
      <h1 className="user-title">User Profile</h1>
      <div className="user-icon">
        <img src="https://img.onl/7N2dFr"className="user-icon"  />
      </div>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* 其他用戶資料... */}
      </div>
    </div>
    </div>
  );
}

export default  UserContent;
