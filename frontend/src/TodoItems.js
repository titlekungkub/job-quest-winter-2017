import React, { Component } from 'react';

class TodoItems extends Component {

    render() {
        let {text,id,completed,onClickedCompleted,onClickedDelete} = this.props
        let itemClass = completed ? 'item completed' : 'item'
        return (
            <div className={itemClass}>
                <span className='complete-button' onClick={()=>onClickedCompleted(id,completed)}>{'\u2714'}</span>
                <div className='description'>{text}</div>
                <span className='delete-button'onClick={()=>onClickedDelete(id)}>{'\u2718'}</span>
            </div>
        );
    }
}

export default TodoItems;