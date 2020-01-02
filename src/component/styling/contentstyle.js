import styled from "styled-components";
import IconAdd from "../img/add_warehouse.png";
import IconDel from "../img/delete_warehouse.png";
import IconFlag from "../img/flag.png";
import IconGoingPage from "../img/Going_page.png";

export const NavIcon = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  width: 19.17px;
  height: 19.17px;
`;
export const ContentIcon = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
`;

export const TitleIcon = styled(ContentIcon)`
  background-image: url(${IconFlag});
`;
export const GoPageIcon = styled(ContentIcon)`
  background-image: url(${IconGoingPage});
`;
export const AddIcon = styled(NavIcon)`
  background-image: url(${IconAdd});
  margin-right: 5px;
`;
export const DelIcon = styled(NavIcon)`
  background-image: url(${IconDel});
  margin-right: 5px;
`;

export const Nav1Container = styled.div`
  display: grid;
  justify-content: flex-end;
  padding: 10px 0px 0px 0px;
  margin: 0;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 0.5px;
    padding: 5px 20px 0px 0px;
    margin: 0;
  }
  li {
    padding-right: 10px;
  }
  ul li button {
    border-radius: 4px 4px 4px 4px;
    background-color: rgb(23, 15, 34);
    border: none;
    display: flex;
    color: inherit;
    justify-content: space-around;
    align-items: center;
    font-size: 0.9rem;
    cursor: pointer;
    font-weight: bold;
    height: 35px;
    width: 100%;
  }
`;

export const ContentContainer0 = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  padding: 15px 30px 35px 30px;

  @media (max-width: 1440px) and (min-width: 1366px) {
    grid-template-columns: repeat(5, auto);
  }

  @media (max-width: 1280px) and (min-width: 800px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 414px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const Content0 = styled.div`
  background-color: rgb(23, 15, 34, 0.78);
  border-radius: 5px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContentTitle = styled.div`
  font-size: 0.8em;
  font-weight: bold;
`;

export const InnerContent = styled.div`
  width: 100%;
  background-color: rgb(23, 15, 34, 0.75);
  margin-top: 20px;
  font-size: 0.8em;
  padding: 15px;
`;

export const FooterContent = styled.div`
  padding: 20px 20px 0px 20px;
  font-size: 0.8em;
`;

export const FooterExtend = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  .extend-item {
    margin: 0;
    padding: 0;
  }
`;
