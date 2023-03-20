import React, { FC, useCallback, ChangeEventHandler } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './styles.module.css';

interface Props {
  text: string;
  onChange: (val: string) => void;
}
export const Search: FC<Props> = ({ text, onChange }) => {
  const onTextChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => onChange(e.target.value),
    [onChange]
  );
  return (
    <div className={styles.main}>
      <label className={styles.label}>
        <FaSearch className={styles.icon} />
        <input
          className={styles.input}
          type="text"
          placeholder="SEARCH (Client Name / Policy Number)"
          value={text}
          onChange={onTextChange}
        />
      </label>
    </div>
  );
};
