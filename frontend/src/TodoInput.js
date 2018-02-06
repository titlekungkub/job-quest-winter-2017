import React, { Component } from 'react';

class TodoInput extends Component {

    constructor(props) {
        super(props);
        this.state={
            newTodo : ""
        }
        this.addEntered = this.addEntered.bind(this)
    }
    
    addEntered(){
        let {onEntered} = this.props
        onEntered(this.state.newTodo)
        this.setState({
            newTodo : ""
        })
    }

    render() {
        let {newTodo} = this.state
        return (
            <div>
                <form id="add-form" onSubmit={(e) => {this.addEntered(); e.preventDefault();}}>
                    <input type="text" value={newTodo} 
                    onChange={(e)=>this.setState({newTodo : e.target.value})}
                    id='create' placeholder='Add a new task...' />
                </form>
            </div>
        );
    }
}

export default TodoInput;