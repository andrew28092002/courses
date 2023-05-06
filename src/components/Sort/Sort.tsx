import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./Sort.module.css";
import SortIcon from "./sort.svg";

interface SortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price,
}

const Sort: FC<SortProps> = ({ sort, setSort, className, ...props }) => {
    
  return (
    <div className={`${className || ""} ${styles.sort}`} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={`${sort == SortEnum.Rating && styles.active}`}
      >
        <SortIcon className={styles.sortIcon} />
        По&nbsp;Рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={`${sort == SortEnum.Price && styles.active}`}
      >
        <SortIcon className={styles.sortIcon} />
        По&nbsp;Цене
      </span>
    </div>
  );
};

export default Sort;
