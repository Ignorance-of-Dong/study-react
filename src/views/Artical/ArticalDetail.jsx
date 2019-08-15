import React, { Component } from 'react'
import { BackButton } from '../../components'
export default class ArticalDetail extends Component {
   
    render() {
        return (
            <div>
                文章详情 {this.props.match.params.id}
                <BackButton />
            </div>
        )
    }
}
