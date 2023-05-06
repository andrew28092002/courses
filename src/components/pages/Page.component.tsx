import { PageModel, TopLevelCategory } from "@/interfaces/page.interface";
import styles from "./Page.module.css";

import React, { FC } from "react";
import { ProductModel } from "@/interfaces/product.inteface";
import HTag from "../HTag/HTag";
import Tag from "../Tag/Tag";
import Card from "../Card/Card";
import HhData from "../hhData/HhData";
import Advantages from "../Advantages/Advantages";
import P from "../Paragraph/Paragraph";

interface PageProps {
  firstCategory: TopLevelCategory;
  page: PageModel;

  products: ProductModel[];
}

const PageComponent: FC<PageProps> = ({ firstCategory, page, products }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.title}`}>
        <HTag tag="h1">{page.title}</HTag>
        {products && (
          <Tag color="gray" size="M">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>

      <div className={`${styles.hhTitle}`}>
        <HTag tag="h2">Вакансии - {page.category}</HTag>

        <Tag color="red" size="M">
          hh.ru
        </Tag>
      </div>

      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh}></HhData>
      )}
      {page.advantages && page.advantages.length && (
        <Advantages advantages={page.advantages} />
      )}

      {page.seoText && <P className={styles.seoText}>{page.seoText}</P>}

      <div className={styles.skills}>
        <HTag tag="h2" className={styles.title}>Получаемые навыки</HTag>

        {page.tags.map((tag) => (
          <Tag color="primary" size="M" key={tag}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default PageComponent;
