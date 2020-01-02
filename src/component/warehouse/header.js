import React from "react";
import {
  IconProfile,
  ArrowDown,
  TimeStamp,
  MyHeader,
  CenterItemHeader,
  RightItemHeader,
  ProfileContent,
  ProfileDropDown,
  LeftItem
} from "../styling/headerstyle";

const Header = () => {
  return (
    <MyHeader>
      <LeftItem>
        <ul>
          <li>
            <a href="#logo">Logo</a>
          </li>
          <li>
            <a href="#dashboard">Dashbard</a>
          </li>
        </ul>
      </LeftItem>
      <CenterItemHeader>
        <TimeStamp>{new Date(Date.now()).toDateString()}</TimeStamp>
      </CenterItemHeader>
      <RightItemHeader>
        <a href="#notify-item">
          <div className="notify-item"></div>
        </a>

        <ProfileDropDown>
          <IconProfile />
          <ArrowDown />
          <ProfileContent>
            <ul>
              <li>
                <a href="#myprofile">My profile</a>
              </li>
              <li>
                <a href="#setting">Setting</a>
              </li>
              <li>
                <a href="#logout">Logout</a>
              </li>
            </ul>
          </ProfileContent>
        </ProfileDropDown>
      </RightItemHeader>
    </MyHeader>
  );
};

export default Header;
