import React, { Component } from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

export default class App extends Component {
    constructor () {
        super()
        this.state = {
            title : '代办事项列表',
            desc : '今日事，今日毕',
            todos : [{
                id : 1,
                title : '吃饭',
                isCompleted : true
            }, {
                id : 2,
                title : '睡觉',
                isCompleted : false
            }]
        }
    }
    addTodo = (todoTitle) => {
        console.log(todoTitle)
        // 这样写出事了，3 不是数组，因为push 语句返回的是数组的长度
        // this.setState({
        //     todos : this.state.todos.push({
        //        id : Math.random(), 
        //        title : todoTitle,
        //        isCompleted : false
        //     })
        // })

        this.setState({
                todos : this.state.todos.concat({
                   id : Math.random(), 
                   title : todoTitle,
                   isCompleted : false
                })
            })
    }

    onCompletedChange = (id) => {
        // console.log('onCompletedChange', id)
        this.setState((prevState) => {
            return {
                todos : prevState.todos.map(todo => {
                    if(todo.id === id) {
                        todo.isCompleted = !todo.isCompleted
                    }
                    return todo
                })
            }
        })
    }

    handleDelete = (id) => {
        console.log('fanqiang', id)
        this.setState ((prevState) => {
           return {
               todos : prevState.todos.filter(todo => {
                   return todo.id != id
               })
           }
        })
    }

    render() {
        return (
            <div>
                <TodoHeader desc={this.state.desc}>
                    {this.state.title}
                </TodoHeader>
                <TodoInput addTodo={this.addTodo}/>
                <TodoList
                 todos={this.state.todos}
                 onCompletedChange={this.onCompletedChange}
                 handleDelete={this.handleDelete}
                />
                <Like />
            </div>
        )
    }
}
