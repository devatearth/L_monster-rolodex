import React, { Component } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list-component';
import SearchBox from './Components/search-box/search-boc-component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
      .then((users) => { this.setState({ monsters: users }) });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({ searchField });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder="Search Monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }

}

export default App;
