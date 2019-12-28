import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-item flex-item">
        <ul>
          <li>
            <a href="#logo">Logo</a>
          </li>
          <li>
            <a href="#dashboard">Dashbard</a>
          </li>
        </ul>
      </div>
      <div className="center-item">
        <div className="timestamp">{new Date(Date.now()).toDateString()}</div>
      </div>
      <div className="right-item">
        <a href="#notify-item">
          <div className="notify-item"></div>
        </a>

        <button className="profile-item-dropdown">
          <div className="profile-icon"></div>
          <div className="arrow-down"></div>
          <div className="dropdown-profile-content">
            <ul>
              <li>
                <a href="#myprofile">My profile</a>
              </li>
              <li>
                <a href="#setting">Setting</a>
              </li>
              <li>
                <a href="#logout">Logout</a>
              </li>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
