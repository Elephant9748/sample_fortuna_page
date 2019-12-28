import React from "react";
import "./navigation.css";

const Navigations = () => {
  return (
    <div className="navigation">
      <ul className="nav-container">
        <li className="item">
          <button>
            <div className="main"></div>
            <div className="button-title">Main</div>
          </button>
        </li>
        <li className="item">
          <button>
            <div className="warehouse"></div>
            <div className="button-title">Warehouse</div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navigations;
