import React, { useEffect, useState } from "react";
import Header from "./header";
import Navigations from "./navigation";
import "./content.css";

const Warehouse = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  console.log(width);
  return (
    <div>
      <Header />
      <Navigations />
      <nav className="nav1-container">
        <ul>
          <li>
            <button>
              <div className="addwarehouse img-space" />
              {width < 800 ? "add" : "add warehouse"}
            </button>
          </li>
          <li>
            <button>
              <div className="deletewarehouse img-space" />
              {width < 800 ? "delete" : "delete warehouse"}
            </button>
          </li>
        </ul>
      </nav>
      <div className="content-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => {
          return (
            <div className="content" key={index}>
              <div className="title">
                <div className="icon-title" />
                <div className="content-title">Warehouse A</div>
              </div>
              <div className="inner-content">
                <table>
                  <thead>
                    <tr>
                      <th>amount</th>
                      <th>kg</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[200, 200, 200, 200].map((index, key) => {
                      return (
                        <tr key={key}>
                          <td>{index}</td>
                          <td>15</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="footer-content">
                <div className="footer-1">Sum : 200/15</div>
                <div className="footer-2">Tag end : 9999999</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Warehouse;
