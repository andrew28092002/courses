import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Paragraph.module.css";

interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  size?: "S" | "M" | "L";
}

const P: FC<ParagraphProps> = ({ size = "M", children, className, ...props }) => {
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
