import React, { Component } from 'react'

import TodoItem from './TodoItem'
import PropTypes from 'prop-types'


export default class TodoList extends Component {
    static propTypes = {
        todos : PropTypes.arrayOf(PropTypes.shape({
            id : PropTypes.number.isRequired,
            title : PropTypes.string.isRequired,
            completed : PropTypes.bool.isRequired
        })).isRequired,
        onCompletedChange : PropTypes.func
    }
    render() {
        return (
            <ul>
               {
                   this.props.todos.map(todo => {
                       return (
                            // <TodoItem 
                            //     key={todo.id}
                            //     id={todo.id}
                            //     title={todo.title}
                            //     completed={todo.completed}
                            // />
                            <TodoItem 
                                onCompletedChange={this.props.onCompletedChange}
                                handleDelete={this.props.handleDelete}
                                key={todo.id}
                                {...todo}
                            />
                       )
                   })
               }
            </ul>
        )
    }
}
