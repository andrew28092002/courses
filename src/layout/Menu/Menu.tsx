import { AppContext } from "@/context/app.context";
import styles from "./Menu.module.css";
import React, { useContext } from "react";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/page.interface";
import CoursesIcon from "./icons/courses.svg";
import ProductsIcon from "./icons/product.svg";
import BooksIcon from "./icons/books.svg";
import ServicesIcon from "./icons/services.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "/courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "/services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "/books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "/products",
    name: "Товары",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

const Menu = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      },
    },
    hidden: {
      marginBottom: 0
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 35,
    },
    hidden: {
      opacity: 0,
      height: 0
    },
  };

  const openSecondLevel = (secondCategory: string) =>
    setMenu &&
    setMenu(
      menu.map((m) => {
        if (m._id.secondCategory == secondCategory) {
          m.isOpened = !m.isOpened;
        }

        return m;
      })
    );

  const buildFirstLevel = () => (
    <>
      {firstLevelMenu.map((menu) => (
        <div key={menu.route}>
          <Link href={`${menu.route}`}>
            <div
              className={`${styles.firstLevel} ${
                menu.id === firstCategory && styles.firstLevelActive
              }`}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </div>
          </Link>

          {menu.id === firstCategory && buildSecondLevel(menu)}
        </div>
      ))}
    </>
  );

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => (
    <div className={`${styles.secondBlock}`}>
      {menu.map((m) => {
        if (m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])) {
          m.isOpened = !m.isOpened;
        }
        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <motion.div
              layout
              variants={variants}
              initial={m.isOpened ? "visible" : "hidden"}
              animate={m.isOpened ? "visible" : "hidden"}
              className={styles.secondLevelBlock}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </motion.div>
          </div>
        );
      })}
    </div>
  );

  const buildThirdLevel = (pages: PageItem[], route: string) => (
    <div>
      {pages.map((p) => (
        <motion.div variants={variantsChildren} key={p._id}>
          <Link
            href={`${route}/${p.alias}`}
            className={`${styles.thirdLevel} ${
              `${route}/${p.alias}` == router.asPath && styles.thirdActiveLevel
            }`}
          >
            {p.category}
          </Link>
        </motion.div>
      ))}
    </div>
  );

  return <div>{buildFirstLevel()}</div>;
};

export default Menu;
