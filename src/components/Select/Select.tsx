import React from "react";
import styles from "./ Select.module.css";
import { ArrowDownIconSvg } from "../Svg/ArrowDownIconSvg";
import { useAppDispatch } from "../../store/hook";
import { setItemsPerPage } from "../../features/table/tableSlice";

export const Select: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="relative inline">
      <div className={styles.arrow}>
        <ArrowDownIconSvg />
      </div>
      <select
        onChange={(e) => dispatch(setItemsPerPage(e.target.value))}
        className={styles.select}
        name="items per page"
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};
