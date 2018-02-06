import React, { Component } from 'react';

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state={
            completed: false
        }
        this.togglecompleteness = this.togglecompleteness.bind(this)
    }
    
    togglecompleteness(){
        this.setState({
            completed : !this.state.completed
        })
    }

    render() {
        let {text} = this.props
        var itemClass = this.state.completed ? 'item completed' : 'item'
        return (
            <div>
                <li className={itemClass}>
                    <span value={this.state.completed}  className='complete-button' onClick={this.togglecompleteness}>{'\u2714'}</span>
                    <div className='description'>{text}</div>
                    <span className='delete-button'>{'\u2718'}</span>
                </li>
            </div>
        );
    }
}

export default TodoItems;