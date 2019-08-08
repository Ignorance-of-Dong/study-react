import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    static propTypes = {
        btnText : PropTypes.string
    }
    static defaultProps = {
        btnText : '添加TODO'
    }
    constructor () {
        super()
        this.state = {
            inputValue : ''
        }
    }
    handleInputChange = (e) => {
        this.setState ({
            inputValue : e.target.value
        })
    }
    handleAddClick = () => {
        this.props.addTodo(this.state.inputValue)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>  
                <button onClick={this.handleAddClick}>{this.props.btnText}</button>
            </div>
        )
    }
}
