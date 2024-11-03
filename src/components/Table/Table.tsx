import React from "react";
import styles from "./Table.module.css";

import { MaleIconSvg } from "../Svg/MaleIconSvg";
import { FemaleIconSvg } from "../Svg/FemaleIconSvg";
import { SettingIconSvg } from "../Svg/SettingIconSvg";
import { useAppSelector } from "../../store/hook";
import { LoadingIconSvg } from "../Svg/LoadingIconSvg";
import { ErrorIconSvg } from "../Svg/ErrorIconSvg";
import { NotFoundSvg } from "../Svg/NotFoundSvg";

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
            <tr key={item.id}>
              <td>
                <div className={styles.box}>
                  <img
                    className={styles.icon}
                    src={item.image}
                    alt={item.firstName}
                  />
                  {`${item.id} ${item.lastName}`}
                </div>
              </td>
              <td>{item.birthDate}</td>
              <td>
                <div className={`capitalize flex items-center`}>
                  <div className="w-[12px]">
                    {item.gender === "male" && <MaleIconSvg />}
                    {item.gender === "female" && <FemaleIconSvg />}
                  </div>
                  {item.gender}
                </div>
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.username}</td>
              <td>{`Bloodgroup “${item.bloodGroup}”; Height ${item.height}; Weight ${item.weight}; Hair color ${item.hair.color}`}</td>
              <td>{item.username}</td>
              <td>{item.ip}</td>
              <td>{item.macAddress}</td>
              <td>{`${item.address.address}. ${item.address.city}, ${item.address.state} ${item.address.postalCode}`}</td>
              <td>{item.bank.cardType}</td>
              <td>{item.university}</td>
              <td>{item.company.name}</td>
              <td>{item.ein}</td>
              <td>{item.ssn}</td>
              <td></td>
            </tr>
          ))}
          {searchUsers.length === 0 &&
            users.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className={styles.box}>
                    <img
                      className={styles.icon}
                      src={item.image}
                      alt={item.firstName}
                    />
                    {`${item.id} ${item.lastName}`}
                  </div>
                </td>
                <td>{item.birthDate}</td>
                <td>
                  <div className={`capitalize flex items-center`}>
                    <div className="w-[12px]">
                      {item.gender === "male" && <MaleIconSvg />}
                      {item.gender === "female" && <FemaleIconSvg />}
                    </div>
                    {item.gender}
                  </div>
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.username}</td>
                <td>{`Bloodgroup “${item.bloodGroup}”; Height ${item.height}; Weight ${item.weight}; Hair color ${item.hair.color}`}</td>
                <td>{item.username}</td>
                <td>{item.ip}</td>
                <td>{item.macAddress}</td>
                <td>{`${item.address.address}. ${item.address.city}, ${item.address.state} ${item.address.postalCode}`}</td>
                <td>{item.bank.cardType}</td>
                <td>{item.university}</td>
                <td>{item.company.name}</td>
                <td>{item.ein}</td>
                <td>{item.ssn}</td>
                <td></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
