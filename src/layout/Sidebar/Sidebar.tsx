import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Sidebar.module.css";
import Menu from "../Menu/Menu";
import Logo from './../logo.svg'
import Search from "@/components/Search/Search";

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Sidebar: FC<SidebarProps> = ({className, ...props }) => {
  return <div className={`${className || ''} ${styles.sidebar}`} {...props}>
    <Logo className={styles.logo}/>
    <Search />
    <div><input type="text" placeholder="Поиск..." /></div>
    <Menu />
  </div>;
};

export default Sidebar;
