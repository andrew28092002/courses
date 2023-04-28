import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Header.module.css";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ ...props }) => {
  return <div {...props}>Header</div>;
};

export default Header;
