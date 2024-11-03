import { ErrorIconSvg } from "../Svg/ErrorIconSvg";
import React from "react";
import styles from "./StatusDisplay.module.css";

export const ErrorState: React.FC = () => {
  return (
    <div className={styles.tableBox}>
      <ErrorIconSvg />
      <div className={styles.infoText}>Opps, something went wrong</div>
    </div>
  );
};
