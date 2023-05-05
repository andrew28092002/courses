import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: "blue" | "white";
  children: ReactNode;
}

const Card: FC<CardProps> = ({
  color = "white",
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`${className || ""} ${styles.card} ${
        color == "blue" && styles.blue
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
