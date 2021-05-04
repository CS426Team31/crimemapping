import React from "react";

//use and import icons from react-icon (https://react-icons.github.io/react-icons)
import * as MDIcons from "react-icons/md";
import * as IO5Icons from "react-icons/io5";

//export the titles and icons for "filter" and "datepicker" components in the sidebar to Sidebar.js
export const SidebarData = [
  {
    title1: "Filters",
    icon1: <IO5Icons.IoFilterSharp />,

    title2: "Date",
    icon2: <MDIcons.MdDateRange />,
  },
];
