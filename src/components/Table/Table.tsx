import React, { useState } from "react";
import styles from "./Table.module.css";
import { SettingIconSvg } from "../Svg/SettingIconSvg";
import { useAppSelector } from "../../store/hook";
import { LoadingIconSvg } from "../Svg/LoadingIconSvg";
import { ErrorIconSvg } from "../Svg/ErrorIconSvg";
import { NotFoundSvg } from "../Svg/NotFoundSvg";
import { UserItem } from "./UserItem";
import { SettingsPopup } from "../SettingsPopup/SettingsPopup";

export const Table: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { users, isLoading, isError, searchUsers, searchText, tableColumns } =
    useAppSelector((state) => state.table);

  if (isLoading) {
    return (
      <div className={styles.tableBox}>
        <LoadingIconSvg />
        <div className={styles.infoText}>Loading Page</div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className={styles.tableBox}>
        <ErrorIconSvg />
        <div className={styles.infoText}>Opps, something went wrong</div>
      </div>
    );
  }
  if (searchText.length && searchUsers.length === 0) {
    return (
      <div className={styles.tableBox}>
        <NotFoundSvg />
        <div className={styles.infoText}>Not found</div>
      </div>
    );
  }
  return (
    <div className={styles.tableContainer}>
      {showPopup && <SettingsPopup />}
      <table className={styles.table}>
        <thead>
          <tr>
            {tableColumns.map(
              (item) =>
                item.display && <th key={item.columnName}>{item.columnName}</th>
            )}

            <th
              className="sticky right-[0]"
              onClick={() => setShowPopup(!showPopup)}
            >
              <div className={styles.border}></div>
              <SettingIconSvg />
            </th>
          </tr>
        </thead>
        <tbody>
          {searchUsers.length !== 0 &&
            searchUsers.map((item) => (
              <UserItem
                key={item.id}
                item={item}
                addLastborder={searchUsers.length < 10}
              />
            ))}
          {searchUsers.length === 0 &&
            users.map((item) => (
              <UserItem
                addLastborder={users.length < 10}
                key={item.id}
                item={item}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};
