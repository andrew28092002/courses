import styles from "@/styles/Home.module.css";
import { useState } from "react";
import React from "react";
import { withLayout } from "@/layout/MainLayout/MainLayout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { PageModel } from "@/interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "@/interfaces/product.inteface";

const firstCategory = 0;

const Course = ({ menu, products, page }: CoursePage) => {
  const [rating, setRating] = useState(0);

  return <>{products.length}</>;
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );

  return {
    paths: menu.flatMap((m) => m.pages.map((p) => `/courses/${p.alias}`)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params)
    return {
      notFound: true,
    };

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );

  const { data: page } = await axios.get<PageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/byAlias/" + params.alias
  );

  const { data: products } = await axios.post<ProductModel[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/product/find",
    {
      category: page.category,
      limit: 10,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  };
};

interface CoursePage extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: PageModel;
  products: ProductModel[];
}
