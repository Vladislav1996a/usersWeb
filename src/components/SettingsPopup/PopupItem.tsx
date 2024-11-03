import React from "react";
import { ArrowCompleteIcon } from "../Svg/ArrowCompleteIcon";
import styles from "./SettingsPopup.module.css";
import { useAppDispatch } from "../../store/hook";
import { setDisplayTableColumn } from "../../features/table/tableSlice";

interface PopupItemProps {
  columnName: string;
  display: boolean;
}

export const PopupItem: React.FC<PopupItemProps> = ({
  columnName,
  display,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={styles.box}
      onClick={() =>
        dispatch(setDisplayTableColumn({ columnName, display: !display }))
      }
    >
      <div className={styles.text}>{columnName}</div>
      {display && (
        <div>
          <ArrowCompleteIcon />
        </div>
      )}
    </div>
  );
};
