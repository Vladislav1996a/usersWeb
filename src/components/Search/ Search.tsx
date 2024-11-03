import React from "react";
import styles from "./Search.module.css";
import { SearchIconSvg } from "../Svg/SearchIconSvg";

interface Searchprops {
  handleSearchChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<Searchprops> = ({ handleSearchChange }) => {
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
      />
    </div>
  );
};
