import React from "react";
import styles from "./Search.module.css";
import { SearchIconSvg } from "../Svg/SearchIconSvg";

interface Searchprops {
  handleSearchChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

export const Search: React.FC<Searchprops> = ({
  handleSearchChange,
  search,
}) => {
  return (
    <div className="relative">
      <div className={styles.icon}>
        <SearchIconSvg />
      </div>
      <input
        onChange={handleSearchChange}
        placeholder="Search..."
        className={styles.input}
        type="text"
        value={search}
      />
    </div>
  );
};
