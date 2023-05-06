import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import AdvantageRow from "./AdvanatageRow/AdvantageRow";
import styles from "./Advanatges.module.css";
import Tag from "../Tag/Tag";
import { Advantage } from "@/interfaces/page.interface";
import P from "../Paragraph/Paragraph";

interface AdvantagesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantages: Advantage[];
  seoText?: string;
}

const Advantages: FC<AdvantagesProps> = ({
  className,
  advantages,
  ...props
}) => {
  return (
    <div className={`${className || ""} ${styles.wrapper}`} {...props}>
      {advantages.map((a) => (
        <AdvantageRow title={a.title} description={a.description} />
      ))}
    </div>
  );
};

export default Advantages;
