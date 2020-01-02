import React from "react";
import {
  ContainerRightContent,
  HeaderRightContent,
  TitleRightContent,
  RightContent1,
  DailyTable,
  DailyTableHead,
  TableWidth,
  HeadCell,
  HeadRow,
  DailyTableBody,
  BodyCell,
  BodyRow,
  RightContent2a
} from "./styling/rightcontentstyle";
import { DailyIcon } from "./styling/warehouseextendstyle";

const RightContent = () => {
  return (
    <ContainerRightContent>
      <HeaderRightContent>
        <DailyIcon />
        <TitleRightContent>Daily</TitleRightContent>
      </HeaderRightContent>
      <RightContent1>
        <DailyTable>
          <DailyTableHead>
            <HeadRow>
              <HeadCell>Amount</HeadCell>
              <HeadCell>Kg</HeadCell>
              <HeadCell style={TableWidth}>Delete</HeadCell>
            </HeadRow>
          </DailyTableHead>
          <DailyTableBody>
            {[1, 2, 3, 4, 5, 6].map(number => {
              return (
                <BodyRow key={number}>
                  <BodyCell>200</BodyCell>
                  <BodyCell>15</BodyCell>
                  <BodyCell style={TableWidth}>
                    <form>
                      <input type="checkbox" name="checklist" />
                    </form>
                  </BodyCell>
                </BodyRow>
              );
            })}
          </DailyTableBody>
        </DailyTable>
      </RightContent1>
      <RightContent2a>TagEndTable</RightContent2a>
    </ContainerRightContent>
  );
};

export default RightContent;
