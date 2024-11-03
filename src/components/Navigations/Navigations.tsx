import React from "react";
import styles from "./Navigations.module.css";
import { Select } from "../Select/Select";
import { Pagination } from "../Pagination/Pagination";

export const Navigations: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="flex items-center gap-[12px]">
        <Select />
        <div className={styles.text}>Items per page</div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};
