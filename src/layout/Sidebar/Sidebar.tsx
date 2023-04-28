import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Sidebar.module.css";

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar: FC<SidebarProps> = ({ ...props }) => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
