import React, {
  DetailedHTMLProps,
  FC,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import styles from "./Input.module.css";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = forwardRef(
  (
    { className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        className={`${className || ""} ${styles.input}`}
        {...props}
        type="text"
        ref={ref}
      />
    );
  }
);

export default Input;
