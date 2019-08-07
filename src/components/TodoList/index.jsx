import React, { Component } from 'react'

import TodoItem from './TodoItem'
import TodoHeader from '../TodoHeader';

export default class TodoList extends Component {
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
                            //     isCompleted={todo.isCompleted}
                            // />
                            <TodoItem 
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
