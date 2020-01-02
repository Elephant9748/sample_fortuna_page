import React from "react";
import {
  NavigationsBar,
  NavContainer,
  Item,
  ButtonItem,
  MainIcon,
  WarehoueIcon,
  ButtonTitle
} from "../styling/navigationstyle";

const Navigations = () => {
  return (
    <NavigationsBar>
      <NavContainer>
        <Item>
          <ButtonItem>
            <MainIcon />
            <ButtonTitle>Main</ButtonTitle>
          </ButtonItem>
        </Item>
        <Item>
          <ButtonItem>
            <WarehoueIcon />
            <ButtonTitle>Warehouse</ButtonTitle>
          </ButtonItem>
        </Item>
      </NavContainer>
    </NavigationsBar>
  );
};

export default Navigations;
