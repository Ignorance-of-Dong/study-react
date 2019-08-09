import React, { Component } from 'react'

const noop = () =>{}

export default class TodoItem extends Component {
    handleCheckboxChange = () => {
        // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
        const  {
            onCompletedChange = noop,
            id
        } = this.props
        onCompletedChange(id)
    }
    handleDeleteItem = () => {
        const {
            handleDelete = noop,
            id 
        } = this.props
        handleDelete(id)
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.completed !== this.props.completed
    }

    render() {
        console.log('TodoItem render')
        const {
            completed,
            title
        } = this.props
        // console.log(this.props)
        return (
            <li>
               <input type="checkbox" 
                checked={completed}
                onChange={this.handleCheckboxChange}
               />
               <span onClick={this.handleDeleteItem}>{title} {completed ? '已完成' : '未完成'}</span>
            </li>
        )
    }
}
