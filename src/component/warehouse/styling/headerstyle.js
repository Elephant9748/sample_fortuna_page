import styled from "styled-components";
import iconNotifyUrl from "../../img/notify.png";
import iconProfileUrl from "../../img/account.png";
import iconArrowDown from "../../img/arrow-down.png";

export const IconProfile = styled.div`
  background-image: url(${iconProfileUrl});
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

export const ArrowDown = styled.div`
  background-image: url(${iconArrowDown});
  width: 10px;
  height: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 10px;
  margin-left: 5px;
  flex-direction: row;
`;

export const TimeStamp = styled.div`
  font-size: 0.85rem;
`;

export const LeftItem = styled.div`
  margin: 0;
  padding-left: 10px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 0.75vw;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 0.8em;
  }
`;

export const MyHeader = styled.div`
  display: flex;
  background-color: rgb(23, 15, 34);
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 8px 0 rgb(23, 15, 34);
  flex-wrap: wrap;
  min-height: 40px;

  .left-item {
    margin: 0;
  }

  .left-item ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .left-item ul li {
    padding: 0.75vw;
  }

  .left-item a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 0.8em;
  }
`;

export const CenterItemHeader = styled.div`
  margin: 0;
  padding: 0;

  .timestamp {
    font-size: 0.85rem;
  }
`;

export const RightItemHeader = styled.div`
  display: flex;

  button {
    border: 0;
    padding: 0;
    outline: none;
  }

  a {
    text-decoration: none;
    padding: 0px;
    margin: 0px;
  }
  .notify-item {
    background-image: url(${iconNotifyUrl});
    width: 22px;
    height: 22px;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 4px 0px 0px 15px;
  }
`;

export const ProfileContent = styled.div`
  position: relative;
  display: inline-block;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    right: -10px;
    width: 125px;
    top: 100%;
    background-color: rgb(23, 15, 34);
    box-shadow: 0px 1px 8px 0 rgb(23, 15, 34);
    position: absolute;
    z-index: 1;
    border-radius: 0px 0px 4px 4px;
  }

  li {
    display: none;
    text-align: center;
    border-bottom: 0.2px solid rgb(28, 19, 41);
    padding: 10px;
  }

  li:last-child {
    border-bottom: none;
  }

  li:first-child {
    margin-top: 10px;
  }

  ul li a {
    text-decoration: none;
    font-size: 0.85rem;
    color: #e9e9e9;
    font-weight: bold;
  }
`;

export const ProfileDropDown = styled.button`
  margin: 4px 15px 0px 15px;
  justify-content: space-between;
  background-color: inherit;
  position: relative;
  cursor: pointer;
  flex-wrap: nowrap;
  display: flex;

  &:hover ${ProfileContent} li {
    display: block;
  }
`;
