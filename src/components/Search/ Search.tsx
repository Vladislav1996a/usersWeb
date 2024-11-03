import React from "react";
import styles from "./Search.module.css";
import { SearchIconSvg } from "../Svg/SearchIconSvg";
import { useAppDispatch } from "../../store/hook";
import { searchUsers } from "../../features/table/tableSlice";

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchParams = {
      url: `https://dummyjson.com/users/search?q=${e.target.value}`,
      searchText: e.target.value,
    };
    dispatch(searchUsers(searchParams));
  };
  return (
    <div className="relative">
      <div className={styles.icon}>
        <SearchIconSvg />
      </div>
      <input
        onChange={handleSearch}
        placeholder="Search..."
        className={styles.input}
        type="text"
      />
    </div>
  );
};
