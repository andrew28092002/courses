import React, { DetailedHTMLProps, FC, HTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
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
