import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./HTag.module.css";

interface HTagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag: "h1" | "h2" | "h3";
  children: ReactNode;
}

const HTag: FC<HTagProps> = ({ tag, children, className, ...props }) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={`${className || ""} ${styles.h1}`} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${className || ""} ${styles.h2}`} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`${className || ""} ${styles.h3}`} {...props}>
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};

export default HTag;
