import { TopLevelCategory } from "./page.interface";

export interface MenuItem {
  _id: Id;
  pages: PageItem[];
  isOpened?: boolean
}

export interface Id {
  secondCategory: string;
}

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: TopLevelCategory;
}

export interface FirstLevelMenuItem {
  route: string,
  name: string,
  icon: JSX.Element,
  id: TopLevelCategory
}