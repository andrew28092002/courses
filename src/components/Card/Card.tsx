import React, {
  DetailedHTMLProps,
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";
import styles from "./Card.module.css";

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "blue" | "white";
  children: ReactNode;
}

const Card = forwardRef(
  (
    { color = "white", className, children, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={`${className ?? ""} ${styles.card} ${
          color == "blue" && styles.blue
        }`}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Card;
