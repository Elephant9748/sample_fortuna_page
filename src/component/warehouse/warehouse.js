import React, { useEffect, useState } from "react";
import Header from "./header";
import Navigations from "./navigation";
// import "./styling/content.css";
import {
  Nav1Container,
  AddIcon,
  DelIcon,
  ContentContainer0,
  Content0,
  ContentTitle,
  Title,TitleIcon, InnerContent, FooterContent, FooterExtend, GoPageIcon
} from "./styling/contentstyle";

const Warehouse = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div>
      <Header />
      <Navigations />
      <Nav1Container>
        <ul>
          <li>
            <button>
              <AddIcon />
              {width < 800 ? "add" : "add warehouse"}
            </button>
          </li>
          <li>
            <button>
              <DelIcon />
              {width < 800 ? "delete" : "delete warehouse"}
            </button>
          </li>
        </ul>
      </Nav1Container>
      <ContentContainer0>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => {
          return (
            <Content0 key={index}>
              <Title>
                <TitleIcon />
                <ContentTitle>Warehouse A</ContentTitle>
              </Title>
              <InnerContent>
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
              </InnerContent>
              <FooterContent>
                <div className="footer-1">Sum : 200/15</div>
                <div className="footer-2">Tag end : 9999999</div>
              </FooterContent>
              <FooterExtend>
                <div className="extend-item">
                  <GoPageIcon />
                </div>
              </FooterExtend>
            </Content0>
          );
        })}
      </ContentContainer0>
    </div>
  );
};

export default Warehouse;
