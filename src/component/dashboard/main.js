import React from "react";
import Header from "../warehouse/header";
import Navigations from "../warehouse/navigation";
import {
  MainContainer,
  MainContent1,
  MainContent2,
  MainContent3
} from "../styling/maindashboardstyle";

const MainDashboard = () => {
  return (
    <>
      <Header />
      <Navigations />
      <MainContainer>
        <MainContent1>GRAPH Weekly</MainContent1>
        <MainContent2>GRAPH Monthly</MainContent2>
        <MainContent3>Report Monthly</MainContent3>
      </MainContainer>
    </>
  );
};

export default MainDashboard;
