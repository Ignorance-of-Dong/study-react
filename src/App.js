import React, { Component } from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'

export default class App extends Component {
    render() {
        return (
            <div>
                <TodoHeader />
                <TodoInput />
                <TodoList />
            </div>
        )
    }
}
