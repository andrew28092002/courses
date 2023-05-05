import styles from "@/styles/Home.module.css";
import { useState } from "react";
import React from "react";
import { withLayout } from "@/layout/MainLayout/MainLayout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { PageModel, TopLevelCategory } from "@/interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "@/interfaces/product.inteface";
import { firstLevelMenu } from "@/layout/Menu/Menu";

const Type = ({}: TypePage) => {

  return <>Type</>;
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    
  return {
    paths: firstLevelMenu.map(m => m.route),
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

  const firstCategoryItem = firstLevelMenu.find(
    (m) => m.route == `/${params.type}`
  );

  if (!firstCategoryItem)
    return {
      notFound: true,
    };

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
      { firstCategory: firstCategoryItem.id }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

interface TypePage extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
