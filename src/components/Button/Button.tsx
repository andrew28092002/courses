import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import styles from "./Button.module.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: "primary" | "ghost";
}

const Button = ({ appearance, children, className, ...props }: ButtonProps) => {
  return (
    <>
      <button
        className={`${className} ${styles.button} ${
          appearance == "ghost" ? styles.ghost : styles.primary
        }`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
