import React, { Component } from 'react';
import TodoItems from './TodoItems'

class TodoList extends Component {

    render() {
        let {items,onDelete,onCompleted} = this.props
        return (
            <div>
                <ul id = 'list'>
                    {
                        items.map(todo => 
                        <li key={todo.id}>
                            <TodoItems text={todo.description} id={todo.id} 
                            completed={todo.completed} onClickedDelete={onDelete}
                            onClickedCompleted={onCompleted}/>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;