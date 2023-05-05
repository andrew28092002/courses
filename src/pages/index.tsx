import styles from "@/styles/Home.module.css";
import HTag from "@/components/HTag/HTag";
import Button from "@/components/Button/Button";
import P from "@/components/Paragraph/Paragraph";
import Tag from "@/components/Tag/Tag";
import Rating from "@/components/Rating/Rating";
import { FC, useState } from "react";
import React from "react";
import { withLayout } from "@/layout/MainLayout/MainLayout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";

const Home = ({ menu, firstCategory }: HomePage) => {
  const [rating, setRating] = useState(0);
  
  return (
    <>
      <main>
        <HTag tag="h1">Something</HTag>
        <HTag tag="h2">Something</HTag>
        <HTag tag="h3">Something</HTag>
        <Button appearance="primary" arrow="right">
          Submit
        </Button>
        <Button appearance="ghost" arrow="down">
          Submit
        </Button>
        <P size="L">Big</P>
        <P>Medium</P>
        <P size="S">Small</P>
        <Tag size="M">Medium</Tag>
        <Tag size="S">Small</Tag>
        <Tag size="M" color="ghost">
          Ghost
        </Tag>
        <Tag size="M" color="green">
          Ghost
        </Tag>
        <Tag size="M" color="primary">
          Ghost
        </Tag>
        <Tag size="M" color="gray" href="#">
          Ghost
        </Tag>
        <Rating rating={4} />
        <Rating rating={rating} setRating={setRating} isEditable={true} />
      </main>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomePage extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}
