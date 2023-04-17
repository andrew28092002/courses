import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Paragraph.module.css";

interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: "S" | "M" | "L";
  className: string;
}

const P = ({ size = "M", children, className, ...props }: ParagraphProps) => {
  return (
    <p
      className={`${className || ""} ${styles.p} ${
        size == "M" ? styles.p2 : size == "L" ? styles.p3 : styles.p1
      }`}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
