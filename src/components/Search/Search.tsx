import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import styles from "./Search.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import SearchIcon from "./search.svg";
import { useRouter } from "next/router";

interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Search: FC<SearchProps> = ({ className, ...props }) => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter()

  const goToSearch = () => {
    router.push({
        pathname: '/search',
        query: {
            q: search
        }
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter'){
        goToSearch()
    }
  }

  return (
    <div className={`${className || ""} ${styles.search}`} {...props}>
      <Input
        placeholder="Поиск..."
        className={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button appearance="primary" className={styles.button} onClick={goToSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
