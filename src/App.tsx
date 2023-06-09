import React, { useState, useMemo, useDeferredValue } from 'react';
import { Search, PersonList } from './components';
import styles from './App.module.css';
import { PersonService } from './service/person.service';

function App() {
  const [searchText, setSearchText] = useState('');
  const deferredValue = useDeferredValue(searchText);

  const data = useMemo(() => {
    return PersonService.filterBy(deferredValue);
  }, [deferredValue]);
  return (
    <div className={styles.App}>
      <Search text={searchText} onChange={setSearchText} />
      <PersonList data={data} />
    </div>
  );
}
export default App;
