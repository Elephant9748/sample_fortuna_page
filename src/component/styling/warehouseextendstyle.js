import styled from "styled-components";
import IconBack from "../img/back.png";
import IconDaily from "../img/daily.png";

export const BackIcon = styled.div`
  background-repeat: no-repeat;
  background-image: url(${IconBack});
  background-size: contain;
  height: 24px;
  width: 24px;
  margin-right: 2.5px;
`;

export const DailyIcon = styled.div`
  background-repeat: no-repeat;
  background-image: url(${IconDaily});
  background-size: contain;
  width: 24px;
  height: 24px;
`;

export const WrapContainer = styled.div`
  background-color: rgb(23, 15, 34, 0.78);
  display: grid;
  margin: 20px 30px 10px 30px;
  padding: 20px 20px 50px 20px;
  grid-template-columns: repeat(7, auto);
  grid-gap: 20px;
`;

export const HeaderNavigations = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  margin: 0;
  padding: 0;

  ul {
    display: flex;
    justify-content: flex-start;
    margin: 10px 0px 10px 0px;
    padding: 0px;
  }

  ul li {
    list-style-type: none;
    margin-right: 15px;
    font-weight: bold;
    padding-top:5px;
  }

  ul li:first-child {
    background-color: rgb(23, 15, 34, 0.5);
    width: 76px;
    height: 30px;
    padding-top:4px;
  }

  ul li a {
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
    color: #e9e9e9;
    font-size: 1.2rem;
  }
`;

export const SideContentContainer = styled.div`
  padding: 0px 0px 0px 15px;
`;

export const SideRealContent = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  background-color: rgb(23, 15, 34, 0.5);
`;

export const HeaderSideRealContent = styled.div`
  padding: 20px 0px 3px 20px;
`;
export const HeaderSideContainer = styled.div`
  display: flex;
`;
export const TitleDailyIcon = styled.div`
  font-size: 0.9em;
  margin: 0;
  padding-left: 5px;
`;
export const UnderlineHeaderSide = styled.div`
  background-color: #9f99af;
  margin-top: 10px;
  margin-left: 3px;
  height: 1px;
  width: 95%;
`;

export const UnderlineContentSide = styled.div`
  background-color: #9f99af;
  margin-left: 5px;
  height: 1px;
  width: 97%;
`;

export const ContentSideGrid1 = styled.div`
  padding: 10px 10px 10px 20px;
  margin: 0;
`;

export const ContentSideGrid2 = styled.div`
  padding: 10px 10px 10px 20px;
`;
