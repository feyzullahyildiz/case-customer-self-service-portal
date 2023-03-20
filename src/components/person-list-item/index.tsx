import React, { FC } from 'react';
import { FaPhone, FaAt, FaFileAlt } from 'react-icons/fa';
import { Person } from '../../models';
import cn from 'classnames';
import styles from './styles.module.css';

export const PersonListItem: FC<Person> = (props) => {
  return (
    <div className={styles.main}>
      <span className={styles.name}>
        {props.firstName} {props.lastName}
      </span>
      <div className={styles.details}>
        <span className={styles.info}>
          <FaPhone className={styles.icon} size={12} />
          {props.phone}
        </span>
        <span className={styles.info}>
          <FaAt className={styles.icon} size={12} />
          {props.userName}
        </span>
        <span className={cn(styles.info, styles.policyNo)}>
          <FaFileAlt className={styles.icon} size={12} />
          <span>Policy No: {props.policyNo}</span>
        </span>
      </div>
    </div>
  );
};
