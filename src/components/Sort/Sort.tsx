import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./Sort.module.css";
import SortIcon from "./sort.svg";
import { ProductModel } from "@/interfaces/product.inteface";

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
        По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={`${sort == SortEnum.Price && styles.active}`}
      >
        <SortIcon className={styles.sortIcon} />
        По цене
      </span>
    </div>
  );
};

export default Sort;
