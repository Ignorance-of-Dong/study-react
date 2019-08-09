import React, { Component } from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

import { getTodos } from './services'

export default class App extends Component {
    constructor () {
        super()
        this.state = {
            title : '代办事项列表',
            desc : '今日事，今日毕',
            todos : [],
            isLoading : false
        }
    }

    getDate = () => {
        this.setState({
            isLoading : true
        })
        getTodos()
       .then (resp => {
            console.log(resp)
            if(resp.status === 200) {
                this.setState ({
                    todos : resp.data
                })
            } else {
                // 处理错误
            }
       })
       .catch (err => {
            console.log(err)
       })
       .finally (() => {
           this.setState({
               isLoading : false
           })
       })
    }

    componentDidMount () {
       this.getDate()
    }

    addTodo = (todoTitle) => {
        console.log(todoTitle)
        // 这样写出事了，3 不是数组，因为push 语句返回的是数组的长度
        // this.setState({
        //     todos : this.state.todos.push({
        //        id : Math.random(), 
        //        title : todoTitle,
        //        completed : false
        //     })
        // })

        this.setState({
                todos : this.state.todos.concat({
                   id : Math.random(), 
                   title : todoTitle,
                   completed : false
                })
            })
    }

    onCompletedChange = (id) => {
        // console.log('onCompletedChange', id)
        this.setState((prevState) => {
            return {
                todos : prevState.todos.map(todo => {
                    if(todo.id === id) {
                        todo.completed = !todo.completed
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
                {
                    this.state.isLoading 
                    ? 
                    <div>loading...</div> 
                    :
                    <TodoList
                    todos={this.state.todos}
                    onCompletedChange={this.onCompletedChange}
                    handleDelete={this.handleDelete}
                    /> 
                }
                <Like />
            </div>
        )
    }
}
