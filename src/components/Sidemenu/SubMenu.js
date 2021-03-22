import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Multiselect } from "multiselect-react-dropdown";
import DatePicker from "./DatePicker";

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

// const DropdownLink = styled(Link)`
//   background: #414757;
//   height: 60px;
//   padding-left: 3rem;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #f5f5f5;
//   font-size: 18px;

//   &:hover {
//     background: #632ce4;
//     cursor: pointer;
//   }
// `;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  const data = [
    { crimeType: "Arson", value: "arson" },
    { crimeType: "Assault", value: "assault" },
    { crimeType: "Burglary", value: "burglary" },
    { crimeType: "Drug Violation", value: "drug_violation" },
    { crimeType: "DUI", value: "dui" },
    { crimeType: "Homicide", value: "homicide" },
    { crimeType: "Robbery", value: "Robbery" },
    { crimeType: "Sex Crimes", value: "sex_crimes" },
    { crimeType: "Shoplifting", value: "shoplifting" },
    { crimeType: "Theft", value: "theft" },
    { crimeType: "Traffic Incident", value: "traffic_incident" },
    { crimeType: "Vandalism", value: "vandalism" },
    { crimeType: "Weapons", value: "weapons" },
  ];
  const [options] = useState(data);

  return (
    <>
      <SidebarLink to={item} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon1}
          <SidebarLabel>{item.title1}</SidebarLabel>
        </div>
      </SidebarLink>
      <Multiselect
        options={options}
        closeOnSelect={false}
        displayValue="crimeType"
        showCheckbox={false}
        closeIcon="close"
        avoidHighlightFirstOption={true}
      />
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
