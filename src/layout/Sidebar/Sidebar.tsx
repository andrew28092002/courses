import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Sidebar.module.css";
import Menu from "../Menu/Menu";

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return <div {...props}>
    <Menu />
  </div>;
};

export default Sidebar;
