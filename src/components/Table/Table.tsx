import React from "react";
import styles from "./Table.module.css";
import { SettingIconSvg } from "../Svg/SettingIconSvg";
import { useAppSelector } from "../../store/hook";
import { LoadingIconSvg } from "../Svg/LoadingIconSvg";
import { ErrorIconSvg } from "../Svg/ErrorIconSvg";
import { NotFoundSvg } from "../Svg/NotFoundSvg";
import { UserItem } from "./UserItem";

export const Table: React.FC = () => {
  const { users, isLoading, isError, searchUsers, searchText } = useAppSelector(
    (state) => state.table
  );

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
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>General Info</th>
            <th>Domain</th>
            <th>IP</th>
            <th>MAC IP</th>
            <th>Address</th>
            <th>Bank</th>
            <th>University</th>
            <th>Company</th>
            <th>EIN</th>
            <th>SSN</th>
            <th className="sticky right-[0]">
              <div className={styles.border}></div>
              <SettingIconSvg />
            </th>
          </tr>
        </thead>
        <tbody>
          {searchUsers.map((item) => (
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
