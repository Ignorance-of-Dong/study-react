import React, { Component } from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'

export default class App extends Component {
    constructor () {
        super()
        this.state = {
            title : '代办事项列表',
            desc : '今日事，今日毕'
        }
    }
    render() {
        return (
            <div>
                <TodoHeader desc={this.state.desc}>
                    {this.state.title}
                </TodoHeader>
                <TodoInput />
                <TodoList />
            </div>
        )
    }
}
