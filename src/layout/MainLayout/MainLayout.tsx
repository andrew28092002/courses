import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./MainLayout.module.css";

interface MainLayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <div>MainLayout</div>;
};

export default MainLayout;
