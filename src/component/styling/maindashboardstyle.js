import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 20px 10px 20px 10px;
  padding: 20px 20px 20px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 20px;

  @media (max-width: 414px) {
    grid-template-columns: repeat(auto-fill, minmax(50vw, 1fr));
  }
`;

export const autoheight = styled.div`
  height: 50vh;
  text-align: center;
  padding-top: 25vh;
  background-color: rgb(23, 15, 34, 0.5);
`;

export const MainContent1 = styled(autoheight)``;

export const MainContent2 = styled(autoheight)``;

export const MainContent3 = styled(autoheight)`
  grid-column-start: 1;
  grid-column-end: -1;
`;
