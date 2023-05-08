import React, { DetailedHTMLProps, FC, ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react'
import styles from './Textarea.module.css'

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const Textarea = forwardRef(({ className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
   <textarea className={`${className || ''} ${styles.textarea}`} {...props}></textarea>
  );
});

export default Textarea;