import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

//These variables are a mix of css and javascript that act like a component
//and are called within the render/return part of a function. They will
//wrap the variables and components within it with the styles it has.
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  opacity: 0.9;
  width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#0096FA" : "#15171c")};
  color: ${(props) => (props.primary ? "white" : "white")};
  font-size: 1em;
  margin: 2em;
  margin-left: 4em;
  padding: 0.25em 1em;
  border: 2px solid #0096fa;
  border-radius: 3px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  //A boolean variable which is used to show or hide the sidebar component
  const [sidebar, setSidebar] = useState(false);

  //A hook that uses the 'sidebar' variable to either show or hide the
  //sidebar component depending on the value it has.
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/**This next line of code assigns a color to the button that
       * open and closes the sidebar
       */}
      <IconContext.Provider value={{ color: "#0096FA" }}>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
        {/** The SidebarNav and SidebarWrap which were declared above are called
         * to wrap the SubMenu component.
         */}
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <FaIcons.FaOutdent onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            {/*  <Button type="submit">Apply</Button> */}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
