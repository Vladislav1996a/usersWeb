import React, { useCallback, useMemo, useState } from "react";
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
  const [search, setSearch] = useState("");

  const handleShowPopup = useCallback(() => {
    setShowPopup((prev) => !prev);
  }, []);
  const {
    users,
    isLoading,
    isError,
    searchUsers,
    searchText,
    tableColumns,
    itemsPerPage,
  } = useAppSelector((state) => state.table);

  const filteredUsers = useMemo(() => {
    if (!search.trim()) return users;

    const searchLower = search.toLowerCase();
    return users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchLower) ||
        user.lastName.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.username.toLowerCase().includes(searchLower)
    );
  }, [search, users, itemsPerPage]);
  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;
  if (searchText.length && searchUsers.length === 0) return <NotFoundState />;

  return (
    <div className="relative">
      {showPopup && <SettingsPopup search={search} setSearch={setSearch} />}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <TableHead columns={tableColumns} handleShowPopup={handleShowPopup} />
          <tbody>
            {searchUsers.length !== 0 &&
              searchUsers.map((item) => (
                <UserItem
                  key={item.id}
                  item={item}
                  addLastBorder={searchUsers.length < 10}
                />
              ))}
            {searchUsers.length === 0 &&
              filteredUsers.map((item) => (
                <UserItem
                  addLastBorder={filteredUsers.length < 10}
                  key={item.id}
                  item={item}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
