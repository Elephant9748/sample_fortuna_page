import React, { useEffect, useState } from "react";
import Header from "./header";
import Navigations from "./navigation";
import FormAddDaily from "./formAddDaily";
import TagDaily from "./tagDaily";
import RightContent from "./rightContent";
import { useFormik } from "formik";
import {
  WrapContainer,
  HeaderNavigations,
  BackIcon,
  SideContentContainer,
  SideRealContent,
  HeaderSideRealContent,
  HeaderSideContainer,
  DailyIcon,
  TitleDailyIcon,
  UnderlineHeaderSide,
  UnderlineContentSide,
  ContentSideGrid1,
  ContentSideGrid2
} from "../styling/warehouseextendstyle";
import { RightContent2, RightContent3, RightContent4 } from "../styling/rightcontentstyle";

const WarehouseExtend = () => {
  const [width, setWidth] = useState(null);
  console.log(width);
  useEffect(() => {
    const documentResize = () => {
      setWidth(
        document.getElementsByClassName(SideContentContainer.styledComponentId)[0].clientWidth
      );
    };
    !width
      ? documentResize()
      : window.addEventListener("resize", documentResize);
    return () => {
      window.removeEventListener("resize", documentResize);
    };
  });
  
  const dailyform = useFormik({
    initialValues: {
      amount: "",
      kg: "",
    },
    onSubmit: (values, props) => {
      alert(JSON.stringify(values, null, 2));
      props.resetForm({});
    },
    onReset: (values, props) => {
      props.resetForm(values);
    }
  });

  const tagform = useFormik({
    initialValues: {
      tag: "",
    },
    onSubmit: (values, props) => {
      alert(JSON.stringify(values, null, 2));
      props.resetForm({});
    },
    onReset: (values, props) => {
      props.resetForm(values);
      console.log(values);
    }
  });

  return (
    <div>
      <Header />
      <Navigations />
      <WrapContainer>
        <HeaderNavigations>
          <ul>
            <li>
              <a href="#back">
                <BackIcon />
                Back
              </a>
            </li>
            <li>
              Warehouse A
              <span style={{ fontSize: ".8rem", fontFamily: "code" }}>
                {` daily size ClientWidth ${width}`}
              </span>
            </li>
          </ul>
        </HeaderNavigations>
        <SideContentContainer>
          <SideRealContent>
            <HeaderSideRealContent>
              <HeaderSideContainer>
                <DailyIcon />
                <TitleDailyIcon>Daily</TitleDailyIcon>
              </HeaderSideContainer>
              <UnderlineHeaderSide />
            </HeaderSideRealContent>
            <ContentSideGrid1>
              <FormAddDaily dailyform={dailyform} />
              <UnderlineContentSide />
            </ContentSideGrid1>
            <ContentSideGrid2>
              <TagDaily tagform={tagform} />
            </ContentSideGrid2>
          </SideRealContent>
        </SideContentContainer>
        <RightContent2>
          <RightContent />
        </RightContent2>
        <RightContent3>WEEKLY REPORT</RightContent3>
        <RightContent4>MONTHLY REPORT</RightContent4>
      </WrapContainer>
    </div>
  );
};

export default WarehouseExtend;
