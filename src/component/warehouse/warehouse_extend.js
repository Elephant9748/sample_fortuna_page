import React, { useEffect, useState } from "react";
import Header from "./header";
import Navigations from "./navigation";
import "./styling/content.css";
import "./styling/content_extend.css";
import "./styling/form_daily.css";
import "./styling/rightContent.css";
import FormAddDaily from "./formAddDaily";
import TagDaily from "./tagDaily";
import RightContent from "./rightContent"
import { useFormik } from "formik";

const WarehouseExtend = () => {
  const [width, setWidth] = useState(null);
  console.log(width);
  useEffect(() => {
    const documentResize = () => {
      setWidth(document.getElementsByClassName("side-content")[0].clientWidth);
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
      kg: ""
    },
    onSubmit: (values, props) => {
      alert(JSON.stringify(values, null, 2));
      props.resetForm({});
    },
    onReset: (values, props) => {
      props.resetForm(values);
    }
  });

  const tagForm = useFormik({
    initialValues: {
      tag: ""
    },
    onSubmit: (values, props) => {
      alert(JSON.stringify(values, null, 2));
      props.resetForm({});
    }, 
    onReset: (values, props) => {
      props.resetForm(values);
    }
  });

  return (
    <div>
      <Header />
      <Navigations />
      <div className="wrap-container">
        <div className="header">
          <ul>
            <li>
              <a href="#back">
                <div className="back-icon"></div>
                Back
              </a>
            </li>
            <li>
              Warehouse A
              <span style={{ fontSize: ".8rem", fontFamily:"code" }}>
                {` daily size ClientWidth ${width}`}
              </span>
            </li>
          </ul>
        </div>
        <div className="side-content">
          <div className="side-grid-real-content">
            <div className="header-side-grid-real-content">
              <div className="header-side-container">
                <div className="daily-icon"></div>
                <div className="title-daily-icon">Daily</div>
              </div>
              <div className="underline-header-side header-width-max"></div>
            </div>
            <div className="content-side-grid-1">
              <FormAddDaily dailyform={dailyform} />
              <div className="underline-content-side content-width-max"></div>
            </div>
            <div className="content-side-grid-2 size-content-side-grid">
              <TagDaily tagForm={tagForm}/>
            </div>
          </div>
        </div>
        <div className="right-content-2">
          <RightContent />
        </div>
        <div className="right-content-3">WEEKLY REPORT</div>
        <div className="right-content-4">MONTHLY REPORT</div>
      </div>
    </div>
  );
};

export default WarehouseExtend;
