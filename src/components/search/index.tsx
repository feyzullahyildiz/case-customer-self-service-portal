import React from 'react';
import { FaSearch } from 'react-icons/fa';

import styles from './styles.module.css';
export const Search = () => {
  return (
    <div className={styles.main}>
      <label className={styles.label}>
        <FaSearch />
        <input
          className={styles.input}
          type="text"
          placeholder="SEARCH (Client Name / Policy Number)"
        />
      </label>
    </div>
  );
};
