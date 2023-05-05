import React, { FC, ReactNode } from "react";
import styles from "./MainLayout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />

      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>

      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout =
  <T extends Record<string, unknown>>(Component: FC<T>) =>
  (props: T) =>
    (
      <MainLayout>
        <Component {...props} />
      </MainLayout>
    );
