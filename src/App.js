import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import {SearchBox} from './components/Search-box/search-box';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: ''
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  render() {
    const {monsters, searchfield} = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder='search monster'
        handleChange={e => {this.setState({searchfield : e.target.value});}}
        />
        <CardList monsters = {filteredMonster}/>
      </div>
    );
  }
}


export default App;
