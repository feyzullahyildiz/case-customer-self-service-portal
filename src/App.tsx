import React, { useState } from 'react';
import { Search, PersonList } from './components';
import './App.css';
import { Person } from './models';

function App() {
  const [searchText, setSearchText] = useState('');
  const data: Person[] = new Array(14)
    .fill(() => null)
    .map((_, i) => ({
      id: i.toString(),
      firstName: 'Ann',
      lastName: 'Liebmann',
      phone: '+27-61-453-544',
      policyNo: '0013983887 | 0013983887',
      userName: 'ann.lieb',
    }));
  return (
    <div className="App">
      <Search text={searchText} onChange={setSearchText} />
      <PersonList data={data} />
    </div>
  );
}
export default App;
