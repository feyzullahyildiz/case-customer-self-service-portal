import React, { FC } from 'react';
import { FaPhone, FaTag, FaFileAlt } from 'react-icons/fa';
import styles from './styles.module.css';
interface Person {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  phone: string;
  policyNo: string;
}

export const PersonListItem: FC<Person> = (props) => {
  return (
    <div className={styles.main}>
      <h4>
        {props.firstName} {props.lastName}
      </h4>
      <div className={styles.details}>
        <span>
          <FaPhone />
          {props.phone}
        </span>
        <span>
          <FaTag />
          {props.phone}
        </span>
        <span>
          <FaFileAlt />
          {props.phone}
        </span>
      </div>
    </div>
  );
};
