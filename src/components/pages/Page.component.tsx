import { PageModel, TopLevelCategory } from "@/interfaces/page.interface";
import styles from "./Page.module.css";
import React, { FC, useReducer } from "react";
import { ProductModel } from "@/interfaces/product.inteface";
import HTag from "../HTag/HTag";
import Tag from "../Tag/Tag";
import HhData from "../hhData/HhData";
import Advantages from "../Advantages/Advantages";
import Sort, { SortEnum } from "../Sort/Sort";

interface PageProps {
  firstCategory: TopLevelCategory;
  page: PageModel;

  products: ProductModel[];
}

type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating };

interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

const sortReducer = (state: SortReducerState, action: SortActions) => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? -1 : 1)),
      };
    default:
      throw new Error("Неверный тип сортировки");
  }
};

const PageComponent: FC<PageProps> = ({ firstCategory, page, products }) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });
 
  const setSort = (sort: SortEnum) => {
    dispatchSort({type: sort})
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.title}`}>
        <HTag tag="h1">{page.title}</HTag>
        {products && (
          <Tag color="gray" size="M">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts && sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}
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

      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        ></div>
      )}

      <div className={styles.skills}>
        <HTag tag="h2" className={styles.title}>
          Получаемые навыки
        </HTag>

        {page.tags.map((tag) => (
          <Tag className={styles.skill} color="primary" size="M" key={tag}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default PageComponent;
