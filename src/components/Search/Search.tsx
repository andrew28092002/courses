import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import styles from "./Search.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import SearchIcon from "./search.svg";

interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Search: FC<SearchProps> = ({ className, ...props }) => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className={`${className || ""} ${styles.search}`}>
      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button appearance="primary" className={styles.button} onClick={() => {}}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
