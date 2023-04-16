import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import styles from "./Button.module.css";
import ArrowIcon from "./Vector.svg";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
}

const Button = ({
  appearance,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <>
      <button
        className={`${className || ""} ${styles.button} ${
          appearance == "ghost" ? styles.ghost : styles.primary
        }`}
        {...props}
      >
        {children}
        {arrow != "none" && (
          <span
            className={`${styles.arrow} ${
              arrow == "down" ? styles.down : styles.right
            }`}
          >
            <ArrowIcon />
          </span>
        )}
      </button>
    </>
  );
};

export default Button;
