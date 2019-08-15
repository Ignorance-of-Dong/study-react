import React, { Component } from 'react'

export default class ArticalDetail extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                文章详情 {this.props.match.params.id}
            </div>
        )
    }
}
