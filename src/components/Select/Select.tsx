import React from "react";
import styles from "./ Select.module.css";
import { ArrowDownIconSvg } from "../Svg/ArrowDownIconSvg";

export const Select: React.FC = () => {
  return (
    <div className="relative inline">
      <div className={styles.arrow}>
        <ArrowDownIconSvg />
      </div>
      <select className={styles.select} name="items per page">
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};
