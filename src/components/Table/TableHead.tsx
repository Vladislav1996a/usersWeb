import { memo } from "react";
import { TableColumns } from "../../types";
import { SettingIconSvg } from "../Svg/SettingIconSvg";
import styles from "./Table.module.css";

interface TableHeadProps {
  columns: TableColumns[];
  handleShowPopup: () => void;
}

export const TableHead: React.FC<TableHeadProps> = memo(
  ({ columns, handleShowPopup }) => {
    return (
      <thead>
        <tr>
          {columns.map(
            (item) =>
              item.display && <th key={item.columnName}>{item.columnName}</th>
          )}

          <th className="sticky right-[0]" onClick={handleShowPopup}>
            <div className={styles.border}></div>
            <SettingIconSvg />
          </th>
        </tr>
      </thead>
    );
  }
);
