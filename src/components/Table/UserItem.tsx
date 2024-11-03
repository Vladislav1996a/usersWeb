import React from "react";
import { UserData } from "../../types";
import styles from "./Table.module.css";
import { MaleIconSvg } from "../Svg/MaleIconSvg";
import { FemaleIconSvg } from "../Svg/FemaleIconSvg";

interface UserItemProps {
  item: UserData;
  addLastborder: boolean;
}

export const UserItem: React.FC<UserItemProps> = ({ item, addLastborder }) => {
  return (
    <tr className={`${addLastborder && styles.borderLast}`}>
      <td>
        <div className={styles.box}>
          <img className={styles.icon} src={item.image} alt={item.firstName} />
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
  );
};
