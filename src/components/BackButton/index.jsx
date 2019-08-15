import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class BackButton extends Component {
    goHome = () => {
        this.props.history.push({
            pathname: '/home',
            state: {
                id: 10
            }
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.goHome}>返回首页</button>
            </div>
        )
    }
}

export default withRouter(BackButton)