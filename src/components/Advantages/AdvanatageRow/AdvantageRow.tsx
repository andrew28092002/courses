import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import CheckIcon from "./check.svg";
import styles from "./AdvantageRow.module.css";

interface AdvantageRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    description: string
  }

const AdvantageRow: FC<AdvantageRowProps> = ({title, description}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleRow}>
        <CheckIcon />
        <div className={styles.title}>{title}</div>
      </div>

      <div className={styles.descriptionRow}>
        <div className={styles.description}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default AdvantageRow;
