import React, { FC } from 'react';
import { Person } from '../../models';
import { PersonListItem } from '../person-list-item';
import styles from './styles.module.css';

interface Props {
  data: Person[];
}
export const PersonList: FC<Props> = ({ data }) => {
  return (
    <div className={styles.main}>
      {data.map((p) => (
        <PersonListItem key={p.id} {...p} />
      ))}
    </div>
  );
};
