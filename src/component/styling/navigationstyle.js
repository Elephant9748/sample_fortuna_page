import styled from "styled-components";
import IconMain from "../img/main.png";
import IconWarehouse from "../img/warehosue.png";

export const MainIcon = styled.div`
  background-image: url(${IconMain});
  background-repeat: no-repeat;
  background-size: contain;
  width: 18px;
  height: 18px;
`;

export const WarehoueIcon = styled.div`
  background-image: url(${IconWarehouse});
  background-repeat: no-repeat;
  background-size: contain;
  width: 18px;
  height: 18px;
`;

export const NavigationsBar = styled.div`
  background-color: rgb(23, 15, 34, 0.5);
  height: 58px;
  padding: 15px 15px 15px 0px;

  ul {
    margin: 0;
    padding-left: 30px;
  }

  li {
    list-style: none;
  }
`;

export const NavContainer = styled.ul`
  display: grid;
  grid-template-columns: 100px 130px;
  padding-left: 65px;

  @media (max-width: 1080px) {
    padding: 0;
  }
`;

export const Item = styled.li`
  padding-right: 10px;
`;

export const ButtonItem = styled.button`
  border-radius: 4px 4px 4px 4px;
  display: flex;
  background-color: rgb(23, 15, 34);
  font-size: 0.9em;
  color: inherit;
  border: none;
  height: 30px;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;

export const ButtonTitle = styled.div`
  padding-left: 5px;
  font-weight: bold;
  font-size: 0.85em;
`;
