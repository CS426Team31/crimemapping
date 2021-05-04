import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DatePicker from "./DatePicker";
import Filters from "./Filters";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 20px;
  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

//a function to show and hide the
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon1}
          <SidebarLabel>{item.title1}</SidebarLabel>
        </div>
      </SidebarLink>
      <Filters />
      <SidebarLink to={item} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon2}
          <SidebarLabel>{item.title2}</SidebarLabel>
        </div>
      </SidebarLink>
      <DatePicker />
    </>
  );
};

export default SubMenu;
