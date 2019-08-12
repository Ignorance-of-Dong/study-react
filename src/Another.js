import React, { Component } from 'react'
import withCopyright from './withCopyright';

@withCopyright
class Another extends Component {
    render() {
        return (
            <div>
                Another {this.props.title}
            </div>
        )
    }
}

export default Another