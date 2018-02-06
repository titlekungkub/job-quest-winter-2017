import React, { Component } from 'react';
import TodoItems from './TodoItems'

class TodoList extends Component {
    render() {
        let {items} = this.props
        return (
            <div>
            <ul id = 'list'>
                {
                    items.map(todo => 
                    <li key={todo.id}>
                        <TodoItems text={todo.description}/>
                    </li>)
                }
            </ul>
            </div>
        );
    }
}

export default TodoList;