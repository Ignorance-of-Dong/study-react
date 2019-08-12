import React, { Component } from 'react'
import withCopyright from './withCopyright'
import Another from './Another'

class App extends Component {
    render() {
        return (
            <div>
                App
                <Another title="这是另一个组件"/>
            </div>
        )
    }
}

export default App