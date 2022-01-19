import React, { Component } from 'react';

import './App.css';

import './'
import { CardList } from './components/card-list/card-list.component'; 

import {SearchBox} from './components/search-box/search-box.componnent'

import {ChangeName} from './components/changeName/change-name.component'




class App extends Component {
  constructor() {
    super();

    this.state={
      monsters:[],
      searchNameField: '',
      searchMailField: '',
      countMonsters: 0
    };
    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters: users}))

  }

  handleChange = (e)=>{
    this.setState({searchMailField: e.target.value})
  }

  changingName = (e)=>{
    const newArray = this.state.monsters;
    newArray[2].name=e.target.value;
    this.setState({monsters:newArray})
  }

  render() {
    
    const {monsters, searchNameField, searchMailField }=this.state;
    const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchNameField.toLowerCase())&&monster.email.toLowerCase().includes(searchMailField.toLowerCase()));


    return (
      <div className="App">
       <ChangeName
       id='changeNum1'
       numOfMonster={2}
       changingName={this.changingName}
       />
       
        <h1>Monster rolodex</h1>
        <SearchBox
        placeholder={'Search a Monster'}
        handleChange={e=> this.setState({searchNameField: e.target.value})}/>
        <SearchBox
        placeholder={'Search an email'}
        handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
        
     
        
      
        

        
        
      </div>
  );



    

 }
}




export default App;
