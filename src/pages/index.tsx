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
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/Textarea";

const Home = ({ menu, firstCategory }: HomePage) => {
  const [rating, setRating] = useState(0);
  
  return (
    <>
      <main>
        
        
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
