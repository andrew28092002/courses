import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Footer.module.css";

interface FooterProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Footer: FC<FooterProps> = ({ ...props }) => {
  return <div {...props}>Footer</div>;
};

export default Footer;
