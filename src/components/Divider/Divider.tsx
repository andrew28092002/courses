import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./Divider.module.css";

interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

const Divider: FC<DividerProps> = ({className, ...props}) => {
  return <hr className={`${className || ""} ${styles.hr}`} {...props}/>;
};

export default Divider;
