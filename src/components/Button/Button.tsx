import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  appearance: "primary" | "ghost";
}

const Button = ({ appearance, children }: ButtonProps) => {
  return (
    <>
      <button
        className={`${styles.button} ${
          appearance == "ghost" ? styles.ghost : styles.primary
        }`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
