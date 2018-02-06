import React, { Component } from 'react';
import TodoInput from './TodoInput'
import TodoList from './TodoList';
import Typed from 'react-typed';
import './style.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      todoItems : [] 
    }
    this.addTodo = this.addTodo.bind(this)
  }
  
  componentWillMount() {
    axios.get('https://listalous.herokuapp.com/lists/titlekungkub/')
    .then((response)=>{
      console.log(response.data['items']);
      this.setState({
        todoItems : response.data['items']
      })
    })
  }
  
  
  addTodo(newTodo){
    this.setState({
      todoItems : this.state.todoItems.concat([newTodo])
    })
  }

  render() {
    let {todoItems} = this.state
    return (
      <div id="container">
        <div id ='header'>
          <Typed 
            strings={['TO DO LIST']} 
            typeSpeed={60} 
          />
        </div>
        <div id="app">
          <div id='form-container'>
            <TodoInput onEntered={this.addTodo}/>
          </div>
          <div id='list-container'>
            <TodoList items={todoItems}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
