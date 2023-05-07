import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./HhData.module.css";
import { Hh } from "@/interfaces/page.interface";
import Card from "../Card/Card";
import StarIcon from "./star.svg";

interface HhDataProps extends Hh {}

export const priceRu = (price: number) =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat("₽");

const HhData: FC<HhDataProps> = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}) => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего Вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начинающий</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <StarIcon className={styles.filled} />
            <StarIcon />
            <StarIcon />
          </div>
        </div>

        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <StarIcon className={styles.filled} />
            <StarIcon />
            <StarIcon />
          </div>
        </div>

        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <StarIcon className={styles.filled} />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HhData;
