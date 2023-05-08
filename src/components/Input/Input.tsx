import React, {
  DetailedHTMLProps,
  FC,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import styles from "./Input.module.css";
import { FieldError } from "react-hook-form";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError;
}

const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={styles.inputWrapper}>
        <input
          className={`${className || ""} ${styles.input} ${
            error && styles.error
          }`}
          {...props}
          type="text"
          ref={ref}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default Input;
