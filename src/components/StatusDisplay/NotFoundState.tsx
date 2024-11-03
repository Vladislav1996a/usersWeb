import React from "react";
import styles from "./StatusDisplay.module.css";
import { NotFoundSvg } from "../Svg/NotFoundSvg";

export const NotFoundState: React.FC = () => {
  return (
    <div className={styles.tableBox}>
      <NotFoundSvg />
      <div className={styles.infoText}>Not found</div>
    </div>
  );
};
