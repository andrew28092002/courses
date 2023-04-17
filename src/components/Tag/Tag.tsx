import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Tag.module.css";

interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: "S" | "M";
  color?: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
}

const Tag = ({
  children,
  size = "M",
  color = "ghost",
  href,
  className,
  ...props
}: TagProps) => {
  return (
    <div
      className={`${className || ""} ${styles.tag} ${
        size == "M" ? styles.m : styles.s
      } ${
        color == "ghost"
          ? styles.ghost
          : color == "red"
          ? styles.red
          : color == "gray"
          ? styles.red
          : color == "green"
          ? styles.green
          : styles.primary
      }`}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
