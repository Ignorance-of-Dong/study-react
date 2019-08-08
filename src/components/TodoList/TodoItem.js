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
    render() {
        const {
            isCompleted,
            title
        } = this.props
        console.log(this.props)
        return (
            <li>
               <input type="checkbox" 
                checked={isCompleted}
                onChange={this.handleCheckboxChange}
               />
               <span onClick={this.handleDeleteItem}>{title} {isCompleted ? '已完成' : '未完成'}</span>
            </li>
        )
    }
}
