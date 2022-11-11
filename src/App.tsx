import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list-component';
import SearchBox from './Components/search-box/search-boc-component';
import { Monster } from './Components/card/card-component';
import { getData } from './utils/data.utills';
const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        placeholder="Search Monsters"
        onChangeHandler={onSearchChange}
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />

    </div>
  );
}

export default App;
