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
    this.deleteTodo = this.deleteTodo.bind(this)
    this.togglecompleteness = this.togglecompleteness.bind(this)
  }
  
  componentWillMount() {
    axios.get('https://listalous.herokuapp.com/lists/titlekungkub')
    .then((response)=>{
      this.setState({
        todoItems : response.data['items']
      })
    })
  }
  
  addTodo(newTodo){
    axios.post('http://listalous.herokuapp.com/lists/titlekungkub/items', {
      description: newTodo,
      completed: false 
    })
    .then((response)=> {
      this.setState({
        todoItems : this.state.todoItems.concat(response.data)
      })
    })
  }

  deleteTodo(itemId){
    axios.delete('http://listalous.herokuapp.com/lists/titlekungkub/items/'+itemId)
    .then((response)=> {
      this.setState({
        todoItems : this.state.todoItems.filter(item => item.id !== response.data.id)
      })
    })
  }
      
  togglecompleteness(itemId,currentComplete){
    let index = this.state.todoItems.findIndex(item => item.id === itemId);
    axios.put('http://listalous.herokuapp.com/lists/titlekungkub/items/'+ itemId,{
      completed: !currentComplete + ''
    })
    .then((response)=> {
      let tmp = this.state.todoItems
      tmp.splice(index,1,response.data)
      this.setState({
        todoItems : tmp
      })
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
            <TodoList items={todoItems} onDelete={this.deleteTodo} onCompleted={this.togglecompleteness}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
