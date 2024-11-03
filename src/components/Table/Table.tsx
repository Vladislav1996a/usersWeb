import React, { useCallback, useState } from "react";
import styles from "./Table.module.css";
import { useAppSelector } from "../../store/hook";
import { UserItem } from "./UserItem";
import { SettingsPopup } from "../SettingsPopup/SettingsPopup";
import { LoadingState } from "../StatusDisplay/LoadingState";
import { ErrorState } from "../StatusDisplay/ErrorState";
import { NotFoundState } from "../StatusDisplay/NotFoundState";
import { TableHead } from "./TableHead";

export const Table: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = useCallback(() => {
    setShowPopup((prev) => !prev);
  }, []);
  const { users, isLoading, isError, searchUsers, searchText, tableColumns } =
    useAppSelector((state) => state.table);

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;
  if (searchText.length && searchUsers.length === 0) return <NotFoundState />;

  return (
    <div className={styles.tableContainer}>
      {showPopup && <SettingsPopup />}
      <table className={styles.table}>
        <TableHead columns={tableColumns} handleShowPopup={handleShowPopup} />
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
