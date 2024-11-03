import React from "react";
import { LoadingIconSvg } from "../Svg/LoadingIconSvg";
import styles from "./StatusDisplay.module.css";

export const LoadingState: React.FC = () => {
  return (
    <div className={styles.tableBox}>
      <LoadingIconSvg />
      <div className={styles.infoText}>Loading Page</div>
    </div>
  );
};
