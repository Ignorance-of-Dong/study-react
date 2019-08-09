import React, {Component} from 'react'
import {render} from 'react-dom'

import classNames from 'classnames'
import styled from 'styled-components'

class App extends Component {
    render () {
        const Title = styled.h1 `
            color : red;
            background : black;
        `
        return (
            <div>
                <Title>元素中的样式</Title>
                <ol>
                    <li style={{color : 'red'}}>使用style内联创建</li>
                    <li className={classNames('a', {'b' : true, 'c' : false})}>要动态添加不同的className就可以使用第三方的包叫classNames</li>
                    <li>styled-components的使用</li>
                </ol>
            </div>
        )
    }
}

render (
    <App />,
    document.querySelector('#root')
)