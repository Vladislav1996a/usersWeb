import React from "react";
import { UserData } from "../../types";
import styles from "./Table.module.css";
import { MaleIconSvg } from "../Svg/MaleIconSvg";
import { FemaleIconSvg } from "../Svg/FemaleIconSvg";
import { useAppSelector } from "../../store/hook";

interface UserItemProps {
  item: UserData;
  addLastborder: boolean;
}

export const UserItem: React.FC<UserItemProps> = ({ item, addLastborder }) => {
  const { tableColumns } = useAppSelector((state) => state.table);

  return (
    <tr className={`${addLastborder && styles.borderLast}`}>
      {tableColumns.map((column) => {
        if (!column.display) return null;

        switch (column.columnName) {
          case "Full name":
            return (
              <td key={column.columnName}>
                <div className={styles.box}>
                  <img
                    className={styles.icon}
                    src={item.image}
                    alt={item.firstName}
                  />
                  {`${item.firstName} ${item.lastName}`}
                </div>
              </td>
            );
          case "Birthday":
            return <td key={column.columnName}>{item.birthDate}</td>;
          case "Gender":
            return (
              <td key={column.columnName}>
                <div className={`capitalize flex items-center`}>
                  <div className="w-[12px]">
                    {item.gender === "male" && <MaleIconSvg />}
                    {item.gender === "female" && <FemaleIconSvg />}
                  </div>
                  {item.gender}
                </div>
              </td>
            );
          case "Email":
            return <td key={column.columnName}>{item.email}</td>;
          case "Phone":
            return <td key={column.columnName}>{item.phone}</td>;
          case "Username":
            return <td key={column.columnName}>{item.username}</td>;
          case "General Info":
            return (
              <td key={column.columnName}>
                {`Bloodgroup “${item.bloodGroup}”; Height ${item.height}; Weight ${item.weight}; Hair color ${item.hair.color}`}
              </td>
            );
          case "Domain":
            return <td key={column.columnName}>{item.ip}</td>;
          case "IP":
            return <td key={column.columnName}>{item.ip}</td>;
          case "MAC IP":
            return <td key={column.columnName}>{item.macAddress}</td>;
          case "Address":
            return (
              <td key={column.columnName}>
                {`${item.address.address}. ${item.address.city}, ${item.address.state} ${item.address.postalCode}`}{" "}
              </td>
            );
          case "Bank":
            return <td key={column.columnName}>{item.bank.cardType}</td>;
          case "University":
            return <td key={column.columnName}>{item.university}</td>;
          case "Company":
            return <td key={column.columnName}>{item.company.name}</td>;
          case "EIN":
            return <td key={column.columnName}>{item.ein}</td>;
          case "SSN":
            return <td key={column.columnName}>{item.ssn}</td>;
          default:
            return <td key={column.columnName}></td>;
        }
      })}
      <td></td>
    </tr>
  );
};
