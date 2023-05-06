import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`${className || ""} ${styles.input}`}
      {...props}
      type="text"
    />
  );
};

export default Input;
