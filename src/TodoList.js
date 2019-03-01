import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="todo">
          <form onSubmit = {this.props.addItem}>
            <input placeholder="Task"
            ref={this.props.inputElement}
            value={this.props.currentItem.text}
            onChange={this.props.handleInput}
            />
            
            &nbsp;
            <button type="submit" className="btn"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList