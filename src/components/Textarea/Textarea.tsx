import React, { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react'
import styles from './Textarea.module.css'

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
  return (
   <textarea className={`${className || ''} ${styles.textarea}`} {...props}></textarea>
  );
};

export default Textarea;