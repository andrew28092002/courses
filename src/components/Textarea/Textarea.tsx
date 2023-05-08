import React, {
  DetailedHTMLProps,
  FC,
  ForwardedRef,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";
import styles from "./Textarea.module.css";
import { FieldError } from "react-hook-form";

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  error?: FieldError;
}

const Textarea = forwardRef(
  (
    { error, className, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    
    return (
      <div className={styles.wrapper}>
        <textarea
          ref={ref}
          className={`${className || ""} ${styles.textarea} ${error && styles.error}`}
          {...props}
        ></textarea>
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default Textarea;
