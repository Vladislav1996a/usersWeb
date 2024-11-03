import React, { useState } from "react";
import styles from "./SettingsPopup.module.css";
import { Search } from "../Search/ Search";
import { PopupItem } from "./PopupItem";
import { useAppSelector } from "../../store/hook";

export const SettingsPopup: React.FC = () => {
  const [, setSearch] = useState("");
  const { tableColumns } = useAppSelector((state) => state.table);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className={styles.container}>
      <Search handleSearchChange={handleSearchChange} />
      <div className="mt-[7px] flex flex-col h-[380px] gap-[4px] overflow-auto">
        {tableColumns.map((item) => (
          <PopupItem
            key={item.columnName}
            display={item.display}
            columnName={item.columnName}
          />
        ))}
      </div>
    </div>
  );
};
