import styled from "styled-components";

export const RightContent2 = styled.div`
  margin: 0;
  padding: 5px 15px 15px 20px;
  grid-column-start: 2;
  grid-column-end: -1;
  background-color: rgb(23, 15, 34, 0.5);
  height: 488px;
`;

export const RightContent3 = styled.div`
  grid-column-start: 2;
  grid-column-end: -1;
  height: 176px;
  background-color: rgb(23, 15, 34, 0.5);
  text-align: center;
  padding-top: 50px;
`;

export const RightContent4 = styled(RightContent3)``;

export const ContainerRightContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding: 0;
  margin: 0;
`;

export const HeaderRightContent = styled.div`
  height: 50px;
  grid-column-start: 1;
  grid-column-end: -1;
  display: flex;
  justify-content: flex-start;
  padding: 15px 10px 10px 0px;
`;

export const TitleRightContent = styled.div`
  padding-left: 5px;
`;

export const RightContent1 = styled.div`
  height: 100%;
`;

export const DailyTable = styled.div`
  display: table;
  padding: 15px 20px 20px 30px;
`;
export const DailyTableHead = styled.div`
  display: table-header-group;
  font-weight: bold;
`;
export const HeadRow = styled.div`
  display: table-row;
`;
export const BodyRow = styled(HeadRow)``;
export const DailyTableCell = styled.div`
  display: table-cell;
  padding: 5px 5px 5px 5px;
  text-align: left;
  font-weight: initial;
`;
export const HeadCell = styled(DailyTableCell)`
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(233, 233, 233);
`;
export const BodyCell = styled(DailyTableCell)`
  padding-top: 20px;
  border-bottom: 1px solid rgb(233, 233, 233);
`;
export const DailyTableBody = styled.div`
  display: table-row-group;
`;
export const TableWidth = {
  paddingLeft: "100px",
  textAlign: "right"
};
export const RightContent2a = styled.div`
  padding: 15px 10px 10px 0px;
  text-align: center;
`;
